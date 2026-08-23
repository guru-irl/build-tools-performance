import React from 'react';
const LABEL_44552 = 'component_44552';
export function Component44552({ value = 44552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44552, 'data-value': derived.doubled }, children);
}
export default Component44552;
