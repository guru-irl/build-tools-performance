import React from 'react';
const LABEL_43915 = 'component_43915';
export function Component43915({ value = 43915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43915, 'data-value': derived.doubled }, children);
}
export default Component43915;
