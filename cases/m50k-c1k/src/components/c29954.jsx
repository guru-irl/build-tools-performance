import React from 'react';
const LABEL_29954 = 'component_29954';
export function Component29954({ value = 29954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29954, 'data-value': derived.doubled }, children);
}
export default Component29954;
