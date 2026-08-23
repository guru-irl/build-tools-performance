import React from 'react';
const LABEL_43826 = 'component_43826';
export function Component43826({ value = 43826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43826, 'data-value': derived.doubled }, children);
}
export default Component43826;
