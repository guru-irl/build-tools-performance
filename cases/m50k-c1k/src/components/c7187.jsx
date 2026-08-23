import React from 'react';
const LABEL_7187 = 'component_7187';
export function Component7187({ value = 7187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7187, 'data-value': derived.doubled }, children);
}
export default Component7187;
