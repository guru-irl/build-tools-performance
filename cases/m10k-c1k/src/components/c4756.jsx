import React from 'react';
const LABEL_4756 = 'component_4756';
export function Component4756({ value = 4756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4756, 'data-value': derived.doubled }, children);
}
export default Component4756;
