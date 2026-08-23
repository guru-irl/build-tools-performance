import React from 'react';
const LABEL_43238 = 'component_43238';
export function Component43238({ value = 43238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43238, 'data-value': derived.doubled }, children);
}
export default Component43238;
