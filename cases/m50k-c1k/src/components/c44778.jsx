import React from 'react';
const LABEL_44778 = 'component_44778';
export function Component44778({ value = 44778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44778, 'data-value': derived.doubled }, children);
}
export default Component44778;
