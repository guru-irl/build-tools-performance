import React from 'react';
const LABEL_43829 = 'component_43829';
export function Component43829({ value = 43829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43829, 'data-value': derived.doubled }, children);
}
export default Component43829;
