import React from 'react';
const LABEL_23764 = 'component_23764';
export function Component23764({ value = 23764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23764, 'data-value': derived.doubled }, children);
}
export default Component23764;
