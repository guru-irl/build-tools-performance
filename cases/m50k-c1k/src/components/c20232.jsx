import React from 'react';
const LABEL_20232 = 'component_20232';
export function Component20232({ value = 20232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20232, 'data-value': derived.doubled }, children);
}
export default Component20232;
