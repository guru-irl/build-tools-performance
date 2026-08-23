import React from 'react';
const LABEL_39099 = 'component_39099';
export function Component39099({ value = 39099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39099, 'data-value': derived.doubled }, children);
}
export default Component39099;
