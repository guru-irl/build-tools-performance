import React from 'react';
const LABEL_35750 = 'component_35750';
export function Component35750({ value = 35750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35750, 'data-value': derived.doubled }, children);
}
export default Component35750;
