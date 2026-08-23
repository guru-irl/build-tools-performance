import React from 'react';
const LABEL_20266 = 'component_20266';
export function Component20266({ value = 20266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20266, 'data-value': derived.doubled }, children);
}
export default Component20266;
