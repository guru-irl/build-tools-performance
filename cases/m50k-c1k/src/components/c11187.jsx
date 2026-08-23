import React from 'react';
const LABEL_11187 = 'component_11187';
export function Component11187({ value = 11187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11187, 'data-value': derived.doubled }, children);
}
export default Component11187;
