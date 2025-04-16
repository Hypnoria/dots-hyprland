#!/bin/bash

# Directory where the wallpapers are located
wallpaper_dir="/home/$USER/.config/hypr/Wallpaper/"
index_file="/tmp/current_wallpaper_index"

# Automatically get the primary monitor
primary_monitor=$(hyprctl monitors | grep 'Monitor' | awk 'NR==1 {print $2}')

# List the available wallpapers
wallpapers=("$wallpaper_dir"/*.{jpg,png})
wallpaper_count=${#wallpapers[@]}

# Read the current index or start from zero
if [[ -f "$index_file" ]]; then
    index=$(cat "$index_file")
else
    index=0
fi

# Ensure the index is a valid number
if ! [[ "$index" =~ ^[0-9]+$ ]] || [[ "$index" -ge "$wallpaper_count" ]]; then
    index=0
fi

# Set the next wallpaper
wallpaper="${wallpapers[$index]}"
index=$(( (index + 1) % wallpaper_count ))

# Save the updated index
echo "$index" > "$index_file"

# Apply the wallpaper to the primary monitor
hyprctl hyprpaper preload "$wallpaper"
hyprctl hyprpaper wallpaper "$primary_monitor,$wallpaper"
