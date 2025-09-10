#!/bin/bash

wallpaper_dir="$HOME/.config/hypr/Wallpaper"
index_file="$HOME/.config/hypr/scripts/wallpaper_index.txt"
primary_monitor=$(hyprctl monitors | grep 'Monitor' | awk 'NR==1 {print $2}')

mapfile -t wallpapers < <(find "$wallpaper_dir" -type f \( -iname '*.jpg' -o -iname '*.png' \))
wallpaper_count=${#wallpapers[@]}

if [[ -f "$index_file" ]]; then
    index=$(cat "$index_file")
else
    index=0
fi

if ! [[ "$index" =~ ^[0-9]+$ ]] || [[ "$index" -ge "$wallpaper_count" ]]; then
    index=0
fi

wallpaper="${wallpapers[$index]}"

hyprctl hyprpaper preload "$wallpaper"
hyprctl hyprpaper wallpaper "$primary_monitor,$wallpaper"
