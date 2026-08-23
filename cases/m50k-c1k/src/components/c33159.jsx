import React from 'react';
const LABEL_33159 = 'component_33159';
export function Component33159({ value = 33159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33159, 'data-value': derived.doubled }, children);
}
export default Component33159;
