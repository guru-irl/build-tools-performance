import React from 'react';
const LABEL_43694 = 'component_43694';
export function Component43694({ value = 43694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43694, 'data-value': derived.doubled }, children);
}
export default Component43694;
