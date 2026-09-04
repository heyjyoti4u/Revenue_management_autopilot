from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/signalstay-mark.png')
out_dir = Path('/home/ubuntu/otamiser-inspired/client/public')
out_dir.mkdir(parents=True, exist_ok=True)

mark = Image.open(source).convert('RGBA')
for size in (192, 512):
    canvas = Image.new('RGBA', (size, size), (8, 13, 34, 255))
    fitted = mark.copy()
    fitted.thumbnail((int(size * 0.68), int(size * 0.68)), Image.Resampling.LANCZOS)
    x = (size - fitted.width) // 2
    y = (size - fitted.height) // 2
    canvas.alpha_composite(fitted, (x, y))
    canvas.save(out_dir / f'pwa-icon-{size}.png', optimize=True)
