import React from 'react';
const LABEL_46756 = 'component_46756';
export function Component46756({ value = 46756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46756, 'data-value': derived.doubled }, children);
}
export default Component46756;
