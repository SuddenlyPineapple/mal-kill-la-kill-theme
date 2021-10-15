# ✂ mal-kill-la-kill-theme ✂


## 📃 Instruction

Export your anime list
```
https://myanimelist.net/panel.php?go=export
```

Then convert it to csv format using this webpage
```
https://www.convertcsv.com/xml-to-csv.htm
```

Put returned CSV file in data folder and name it `mal.csv` then run:
```
npm run parse
```

Alternatively you can change name of the parsed file in `config/index.js` (it's faster for development and debugging).


## 🚀 To upload this generated styles to MAL 
Go to `https://myanimelist.net/ownlist/style` -> Click `Advanced CSS List Design` -> Choose List -> Paste the `output.css` content -> Click `Update CSS`

## ❓ Disclaimers/Tips
- Covers in this project are acquired by scrapping directly from MAL, so you can be cut off by their anti DDoS protection services (like `Cloudflare`). To prevent this, when your list is huge increase sleep time in `src/index.js:18`.

- Logs are asynchronous so they won't be displayed in proper order in console.

- Upon completion check if number of lines in `mal-anime.css` (one of the outputted file) file is consistent with your anime list.

- If script won't work try it with `node` in version `14.x`

- Theme stylesheet was created by guy named `Wyverncloak`, though i couldn't find him on GitHub and this script was written some time after i stared use this theme I can't find it anymore anywhere. If anyone know origin of it, please send me info and I will paste link to it here ;)