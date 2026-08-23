import React from 'react';
const LABEL_43311 = 'component_43311';
export function Component43311({ value = 43311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43311, 'data-value': derived.doubled }, children);
}
export default Component43311;
