import React from 'react';
const LABEL_32533 = 'component_32533';
export function Component32533({ value = 32533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32533, 'data-value': derived.doubled }, children);
}
export default Component32533;
