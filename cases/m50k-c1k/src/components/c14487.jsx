import React from 'react';
const LABEL_14487 = 'component_14487';
export function Component14487({ value = 14487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14487, 'data-value': derived.doubled }, children);
}
export default Component14487;
