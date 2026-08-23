import React from 'react';
const LABEL_20540 = 'component_20540';
export function Component20540({ value = 20540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20540, 'data-value': derived.doubled }, children);
}
export default Component20540;
