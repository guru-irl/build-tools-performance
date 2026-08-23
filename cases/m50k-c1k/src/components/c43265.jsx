import React from 'react';
const LABEL_43265 = 'component_43265';
export function Component43265({ value = 43265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43265, 'data-value': derived.doubled }, children);
}
export default Component43265;
