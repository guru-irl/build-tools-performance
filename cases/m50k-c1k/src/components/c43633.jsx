import React from 'react';
const LABEL_43633 = 'component_43633';
export function Component43633({ value = 43633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43633, 'data-value': derived.doubled }, children);
}
export default Component43633;
