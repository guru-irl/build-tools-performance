import React from 'react';
const LABEL_38402 = 'component_38402';
export function Component38402({ value = 38402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38402, 'data-value': derived.doubled }, children);
}
export default Component38402;
