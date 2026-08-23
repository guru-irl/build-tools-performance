import React from 'react';
const LABEL_43815 = 'component_43815';
export function Component43815({ value = 43815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43815, 'data-value': derived.doubled }, children);
}
export default Component43815;
