import React from 'react';
const LABEL_43396 = 'component_43396';
export function Component43396({ value = 43396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43396, 'data-value': derived.doubled }, children);
}
export default Component43396;
