function createDom(look, code, tabname, content){
    const win = window.open("", "", "width=800,height=500");
    win.document.title = tabname;
    win.document.write(content);
    win.document.write(`<style>${look}</style>`);
    win.document.write(`<script>${code};</script>`);
}

fetch('https://mrchaoticx.github.io/Never-Block/unblock-content.json').then(response=> response.json()).then(data=>{
        const style = data.style;
        const htm = data.html;
        const scrip = data.script;
        const title = data.title;

        createDom(style, scrip, title, htm);
    }
);
