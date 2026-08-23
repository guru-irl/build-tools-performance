import React from 'react';
const LABEL_5161 = 'component_5161';
export function Component5161({ value = 5161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5161, 'data-value': derived.doubled }, children);
}
export default Component5161;
