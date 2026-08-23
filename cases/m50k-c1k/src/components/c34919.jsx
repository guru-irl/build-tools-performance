import React from 'react';
const LABEL_34919 = 'component_34919';
export function Component34919({ value = 34919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34919, 'data-value': derived.doubled }, children);
}
export default Component34919;
