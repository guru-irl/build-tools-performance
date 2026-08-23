import React from 'react';
const LABEL_11399 = 'component_11399';
export function Component11399({ value = 11399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11399, 'data-value': derived.doubled }, children);
}
export default Component11399;
