import React from 'react';
const LABEL_44922 = 'component_44922';
export function Component44922({ value = 44922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44922, 'data-value': derived.doubled }, children);
}
export default Component44922;
