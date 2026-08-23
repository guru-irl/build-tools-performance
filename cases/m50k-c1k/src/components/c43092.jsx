import React from 'react';
const LABEL_43092 = 'component_43092';
export function Component43092({ value = 43092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43092, 'data-value': derived.doubled }, children);
}
export default Component43092;
