import React from 'react';
const LABEL_43110 = 'component_43110';
export function Component43110({ value = 43110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43110, 'data-value': derived.doubled }, children);
}
export default Component43110;
