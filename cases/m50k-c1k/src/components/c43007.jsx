import React from 'react';
const LABEL_43007 = 'component_43007';
export function Component43007({ value = 43007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43007, 'data-value': derived.doubled }, children);
}
export default Component43007;
