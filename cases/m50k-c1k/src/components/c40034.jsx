import React from 'react';
const LABEL_40034 = 'component_40034';
export function Component40034({ value = 40034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40034, 'data-value': derived.doubled }, children);
}
export default Component40034;
