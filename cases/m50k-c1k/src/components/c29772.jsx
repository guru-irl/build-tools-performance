import React from 'react';
const LABEL_29772 = 'component_29772';
export function Component29772({ value = 29772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29772, 'data-value': derived.doubled }, children);
}
export default Component29772;
