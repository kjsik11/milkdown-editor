import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { emoji } from '@milkdown/plugin-emoji';
import { history } from '@milkdown/plugin-history';
import { prism } from '@milkdown/plugin-prism';
import { slash } from '@milkdown/plugin-slash';
import { tooltip } from '@milkdown/plugin-tooltip';
import { gfm } from '@milkdown/preset-gfm';
import { ReactEditor, useEditor } from '@milkdown/react';
import cn from 'classnames';

import root from '@assets/milkdown.module.css';

import { theme } from './theme';
import { timerPlugin } from './timer';

const defaultValue = `
# :checkered_flag:Milkdown test :heartpulse:

![paper](https://images.hdqwalls.com/wallpapers/8-bit-pixel-art-city-2o.jpg)

\`\`\`typescript
const milkdown = "magic";
\`\`\`

* The [lunatic](https://github.com/Saul-Mirone/milkdown) is on the grass
* The lunatic is in the hall

| Theme | Keywords |
| -------- | ----- |
| theme | Cyberpunk |
| Nord | Elegant |
`;

export default function EditorComponent() {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, defaultValue);
      })
      .use(theme)
      .use(timerPlugin)
      .use(gfm)
      .use(emoji)
      .use(tooltip)
      .use(history)
      .use(slash)
      .use(prism),
  );

  return (
    <div className={cn(root)}>
      <ReactEditor editor={editor} />;
    </div>
  );
}
