import React from 'react';
const LABEL_36959 = 'component_36959';
export function Component36959({ value = 36959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36959, 'data-value': derived.doubled }, children);
}
export default Component36959;
