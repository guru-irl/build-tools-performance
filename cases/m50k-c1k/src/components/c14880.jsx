import React from 'react';
const LABEL_14880 = 'component_14880';
export function Component14880({ value = 14880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14880, 'data-value': derived.doubled }, children);
}
export default Component14880;
