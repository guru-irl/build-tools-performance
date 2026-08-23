import React from 'react';
const LABEL_7271 = 'component_7271';
export function Component7271({ value = 7271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7271, 'data-value': derived.doubled }, children);
}
export default Component7271;
