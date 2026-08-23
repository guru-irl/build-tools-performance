import React from 'react';
const LABEL_33 = 'component_33';
export function Component33({ value = 33, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33, 'data-value': derived.doubled }, children);
}
export default Component33;
