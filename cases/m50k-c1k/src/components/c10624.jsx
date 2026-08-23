import React from 'react';
const LABEL_10624 = 'component_10624';
export function Component10624({ value = 10624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10624, 'data-value': derived.doubled }, children);
}
export default Component10624;
