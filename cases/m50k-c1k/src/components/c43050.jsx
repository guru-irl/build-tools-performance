import React from 'react';
const LABEL_43050 = 'component_43050';
export function Component43050({ value = 43050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43050, 'data-value': derived.doubled }, children);
}
export default Component43050;
