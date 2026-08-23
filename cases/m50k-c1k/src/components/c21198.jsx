import React from 'react';
const LABEL_21198 = 'component_21198';
export function Component21198({ value = 21198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21198, 'data-value': derived.doubled }, children);
}
export default Component21198;
