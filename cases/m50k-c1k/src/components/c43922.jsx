import React from 'react';
const LABEL_43922 = 'component_43922';
export function Component43922({ value = 43922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43922, 'data-value': derived.doubled }, children);
}
export default Component43922;
