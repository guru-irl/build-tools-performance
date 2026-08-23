import React from 'react';
const LABEL_43939 = 'component_43939';
export function Component43939({ value = 43939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43939, 'data-value': derived.doubled }, children);
}
export default Component43939;
