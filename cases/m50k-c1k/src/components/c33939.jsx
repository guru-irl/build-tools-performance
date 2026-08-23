import React from 'react';
const LABEL_33939 = 'component_33939';
export function Component33939({ value = 33939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33939, 'data-value': derived.doubled }, children);
}
export default Component33939;
