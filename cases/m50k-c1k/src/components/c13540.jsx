import React from 'react';
const LABEL_13540 = 'component_13540';
export function Component13540({ value = 13540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13540, 'data-value': derived.doubled }, children);
}
export default Component13540;
