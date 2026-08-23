import React from 'react';
const LABEL_43334 = 'component_43334';
export function Component43334({ value = 43334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43334, 'data-value': derived.doubled }, children);
}
export default Component43334;
