import React from 'react';
const LABEL_35081 = 'component_35081';
export function Component35081({ value = 35081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35081, 'data-value': derived.doubled }, children);
}
export default Component35081;
