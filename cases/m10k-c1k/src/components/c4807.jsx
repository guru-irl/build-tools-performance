import React from 'react';
const LABEL_4807 = 'component_4807';
export function Component4807({ value = 4807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4807, 'data-value': derived.doubled }, children);
}
export default Component4807;
