import React from 'react';
const LABEL_22502 = 'component_22502';
export function Component22502({ value = 22502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22502, 'data-value': derived.doubled }, children);
}
export default Component22502;
