import React from 'react';
const LABEL_20092 = 'component_20092';
export function Component20092({ value = 20092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20092, 'data-value': derived.doubled }, children);
}
export default Component20092;
