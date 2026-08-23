import React from 'react';
const LABEL_43636 = 'component_43636';
export function Component43636({ value = 43636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43636, 'data-value': derived.doubled }, children);
}
export default Component43636;
