import React from 'react';
const LABEL_18092 = 'component_18092';
export function Component18092({ value = 18092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18092, 'data-value': derived.doubled }, children);
}
export default Component18092;
