import React from 'react';
const LABEL_43649 = 'component_43649';
export function Component43649({ value = 43649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43649, 'data-value': derived.doubled }, children);
}
export default Component43649;
