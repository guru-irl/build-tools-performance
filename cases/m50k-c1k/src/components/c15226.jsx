import React from 'react';
const LABEL_15226 = 'component_15226';
export function Component15226({ value = 15226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15226, 'data-value': derived.doubled }, children);
}
export default Component15226;
