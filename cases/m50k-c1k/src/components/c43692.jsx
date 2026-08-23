import React from 'react';
const LABEL_43692 = 'component_43692';
export function Component43692({ value = 43692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43692, 'data-value': derived.doubled }, children);
}
export default Component43692;
