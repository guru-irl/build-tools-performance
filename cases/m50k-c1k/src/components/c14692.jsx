import React from 'react';
const LABEL_14692 = 'component_14692';
export function Component14692({ value = 14692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14692, 'data-value': derived.doubled }, children);
}
export default Component14692;
