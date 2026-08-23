import React from 'react';
const LABEL_44471 = 'component_44471';
export function Component44471({ value = 44471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44471, 'data-value': derived.doubled }, children);
}
export default Component44471;
