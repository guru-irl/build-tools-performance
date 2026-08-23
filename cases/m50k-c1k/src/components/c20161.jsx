import React from 'react';
const LABEL_20161 = 'component_20161';
export function Component20161({ value = 20161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20161, 'data-value': derived.doubled }, children);
}
export default Component20161;
