import React from 'react';
const LABEL_26198 = 'component_26198';
export function Component26198({ value = 26198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26198, 'data-value': derived.doubled }, children);
}
export default Component26198;
