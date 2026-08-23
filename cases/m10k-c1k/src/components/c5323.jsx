import React from 'react';
const LABEL_5323 = 'component_5323';
export function Component5323({ value = 5323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5323, 'data-value': derived.doubled }, children);
}
export default Component5323;
