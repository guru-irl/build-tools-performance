import React from 'react';
const LABEL_43488 = 'component_43488';
export function Component43488({ value = 43488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43488, 'data-value': derived.doubled }, children);
}
export default Component43488;
