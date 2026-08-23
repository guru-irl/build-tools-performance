import React from 'react';
const LABEL_23823 = 'component_23823';
export function Component23823({ value = 23823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23823, 'data-value': derived.doubled }, children);
}
export default Component23823;
