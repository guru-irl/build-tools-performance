import React from 'react';
const LABEL_20380 = 'component_20380';
export function Component20380({ value = 20380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20380, 'data-value': derived.doubled }, children);
}
export default Component20380;
