import React from 'react';
const LABEL_4092 = 'component_4092';
export function Component4092({ value = 4092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4092, 'data-value': derived.doubled }, children);
}
export default Component4092;
