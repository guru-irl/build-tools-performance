import React from 'react';
const LABEL_43758 = 'component_43758';
export function Component43758({ value = 43758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43758, 'data-value': derived.doubled }, children);
}
export default Component43758;
