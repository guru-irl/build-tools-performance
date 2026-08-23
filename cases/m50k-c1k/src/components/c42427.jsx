import React from 'react';
const LABEL_42427 = 'component_42427';
export function Component42427({ value = 42427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42427, 'data-value': derived.doubled }, children);
}
export default Component42427;
