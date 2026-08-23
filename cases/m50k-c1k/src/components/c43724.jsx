import React from 'react';
const LABEL_43724 = 'component_43724';
export function Component43724({ value = 43724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43724, 'data-value': derived.doubled }, children);
}
export default Component43724;
