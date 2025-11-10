# TODO: Modify Gallery Component for Company Logos and Work Galleries

## Steps to Complete:

1. **Update data structure**: Replace the existing `gallery` array with a `companies` array. Each company object should include:

   - name: Company name (e.g., "تمليك", "جسر", etc.)
   - logo: Path to logo image (e.g., "/companys/تمليك.jpg")
   - facebook: Placeholder Facebook link (e.g., "#")
   - drive: Placeholder drive link (e.g., "#")
   - workPhotos: Array of work photo paths (use existing public images as placeholders, e.g., ["/استشاره.jpeg", "/ديكور.jfif", etc.])

2. **Modify JSX structure**: Change the grid to display company logos instead of work images. Each item should show the logo image.

3. **Add Facebook icon**: Below each logo, add a Facebook icon (using SVG or icon library).

4. **Implement click functionality**: Make each logo clickable to open a modal showing the work photos for that company.

5. **Create modal component**: Add a modal that displays the work photos in a gallery format, with a link to the drive for more photos.

6. **Update styling**: Ensure the component looks good with the new structure, maintaining the existing design theme.

7. **Test the component**: Run the Next.js app and verify the gallery works, modal opens on click, and links are functional.

## Progress:

- [x] Step 1: Update data structure
- [x] Step 2: Modify JSX structure
- [x] Step 3: Add Facebook icon
- [x] Step 4: Implement click functionality
- [x] Step 5: Create modal component
- [x] Step 6: Update styling
- [x] Step 7: Test the component
