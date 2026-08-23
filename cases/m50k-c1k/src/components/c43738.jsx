import React from 'react';
const LABEL_43738 = 'component_43738';
export function Component43738({ value = 43738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43738, 'data-value': derived.doubled }, children);
}
export default Component43738;
