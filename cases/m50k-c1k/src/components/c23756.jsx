import React from 'react';
const LABEL_23756 = 'component_23756';
export function Component23756({ value = 23756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23756, 'data-value': derived.doubled }, children);
}
export default Component23756;
