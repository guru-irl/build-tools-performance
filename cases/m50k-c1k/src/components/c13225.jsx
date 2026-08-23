import React from 'react';
const LABEL_13225 = 'component_13225';
export function Component13225({ value = 13225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13225, 'data-value': derived.doubled }, children);
}
export default Component13225;
