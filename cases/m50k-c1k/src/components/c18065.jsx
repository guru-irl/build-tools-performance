import React from 'react';
const LABEL_18065 = 'component_18065';
export function Component18065({ value = 18065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18065, 'data-value': derived.doubled }, children);
}
export default Component18065;
