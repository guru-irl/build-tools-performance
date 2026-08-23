import React from 'react';
const LABEL_42489 = 'component_42489';
export function Component42489({ value = 42489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42489, 'data-value': derived.doubled }, children);
}
export default Component42489;
