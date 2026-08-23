import React from 'react';
const LABEL_22480 = 'component_22480';
export function Component22480({ value = 22480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22480, 'data-value': derived.doubled }, children);
}
export default Component22480;
