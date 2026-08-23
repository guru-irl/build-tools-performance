import React from 'react';
const LABEL_43034 = 'component_43034';
export function Component43034({ value = 43034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43034, 'data-value': derived.doubled }, children);
}
export default Component43034;
