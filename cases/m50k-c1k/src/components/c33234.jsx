import React from 'react';
const LABEL_33234 = 'component_33234';
export function Component33234({ value = 33234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33234, 'data-value': derived.doubled }, children);
}
export default Component33234;
