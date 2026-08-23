import React from 'react';
const LABEL_43853 = 'component_43853';
export function Component43853({ value = 43853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43853, 'data-value': derived.doubled }, children);
}
export default Component43853;
