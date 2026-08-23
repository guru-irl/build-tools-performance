import React from 'react';
const LABEL_756 = 'component_756';
export function Component756({ value = 756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_756, 'data-value': derived.doubled }, children);
}
export default Component756;
