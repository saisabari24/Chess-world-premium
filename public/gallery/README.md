# Chess World Photo Gallery Instructions

To add new photos to the gallery:

### Method 1: Drop any photos in `/public/gallery/` (No naming conventions required)
Simply place any image file (e.g. `tournament.jpg`, `DSC_001.png`, `group_shot.webp`) inside the `/public/gallery/` folder.
Whatever photo is placed in `/public/gallery/` will automatically be loaded and displayed in the gallery when the project builds (`npm run build`).

### Method 2: Dynamic runtime additions via `manifest.json`
You can also add any photo path to `/public/gallery/manifest.json`:

```json
{
  "photos": [
    "/gallery/my_custom_photo.jpg",
    "/gallery/event_2026.png"
  ]
}
```

