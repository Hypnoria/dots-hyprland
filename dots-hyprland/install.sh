#!/bin/bash

# Welcome message
echo "Starting installation and configuration..."

# Check if the script is being run as root (not recommended for yay section)
if [ "$(id -u)" -eq 0 ]; then
    echo "Please do not run this script as root. Run it as a regular user with sudo privileges."
    exit 1
fi

# Define script and hyprfiles directory
SCRIPT_DIR=$(dirname "$(realpath "$0")")
HYPRFILES_DIR="$SCRIPT_DIR/hyprfiles"

# Check if hyprfiles exists
if [ ! -d "$HYPRFILES_DIR" ]; then
    echo "The 'hyprfiles' directory does not exist."
    exit 1
fi

# Ensure yay is installed
if ! command -v yay &> /dev/null; then
    echo "yay is not installed. Installing yay..."
    sudo pacman -S --needed git base-devel
    git clone https://aur.archlinux.org/yay.git
    cd yay && makepkg -si && cd .. && rm -rf yay
    yay -Y --gendb
fi

# Update system and install official packages
echo "Installing packages from official repositories..."
sudo pacman -Syu --noconfirm
sudo pacman -S --noconfirm hyprpaper waybar pavucontrol networkmanager network-manager-applet vivaldi ttf-font-awesome ufw shotwell

# Install AUR packages
echo "Installing AUR packages with yay..."
yay -S --noconfirm vscodium rofi btop cava hyprshot nerd-fonts fastfetch

# Copy config files
echo "Copying config files to ~/.config..."
mkdir -p "$HOME/.config"

cp -r "$HYPRFILES_DIR/btop" ~/.config/
cp -r "$HYPRFILES_DIR/cava" ~/.config/
cp -r "$HYPRFILES_DIR/fastfetch" ~/.config/
cp -r "$HYPRFILES_DIR/hypr" ~/.config/
cp -r "$HYPRFILES_DIR/rofi" ~/.config/
cp -r "$HYPRFILES_DIR/VSCodium" ~/.config/
cp -r "$HYPRFILES_DIR/waybar" ~/.config/

# Set ownership
echo "Setting permissions..."
sudo chown -R "$(whoami)":"$(whoami)" ~/.config/

# Done
echo "Installation and configuration completed successfully!"
echo "Please restart your computer"
