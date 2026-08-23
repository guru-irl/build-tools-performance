import React from 'react';
const LABEL_20743 = 'component_20743';
export function Component20743({ value = 20743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20743, 'data-value': derived.doubled }, children);
}
export default Component20743;
