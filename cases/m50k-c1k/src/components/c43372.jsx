import React from 'react';
const LABEL_43372 = 'component_43372';
export function Component43372({ value = 43372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43372, 'data-value': derived.doubled }, children);
}
export default Component43372;
