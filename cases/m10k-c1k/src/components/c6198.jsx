import React from 'react';
const LABEL_6198 = 'component_6198';
export function Component6198({ value = 6198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6198, 'data-value': derived.doubled }, children);
}
export default Component6198;
