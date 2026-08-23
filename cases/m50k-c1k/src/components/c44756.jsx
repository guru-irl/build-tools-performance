import React from 'react';
const LABEL_44756 = 'component_44756';
export function Component44756({ value = 44756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44756, 'data-value': derived.doubled }, children);
}
export default Component44756;
