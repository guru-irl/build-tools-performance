import React from 'react';
const LABEL_14847 = 'component_14847';
export function Component14847({ value = 14847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14847, 'data-value': derived.doubled }, children);
}
export default Component14847;
