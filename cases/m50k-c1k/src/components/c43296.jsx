import React from 'react';
const LABEL_43296 = 'component_43296';
export function Component43296({ value = 43296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43296, 'data-value': derived.doubled }, children);
}
export default Component43296;
