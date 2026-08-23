import React from 'react';
const LABEL_28692 = 'component_28692';
export function Component28692({ value = 28692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28692, 'data-value': derived.doubled }, children);
}
export default Component28692;
