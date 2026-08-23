import React from 'react';
const LABEL_2756 = 'component_2756';
export function Component2756({ value = 2756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2756, 'data-value': derived.doubled }, children);
}
export default Component2756;
