import React from 'react';
const LABEL_44063 = 'component_44063';
export function Component44063({ value = 44063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44063, 'data-value': derived.doubled }, children);
}
export default Component44063;
