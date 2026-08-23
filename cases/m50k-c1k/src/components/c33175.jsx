import React from 'react';
const LABEL_33175 = 'component_33175';
export function Component33175({ value = 33175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33175, 'data-value': derived.doubled }, children);
}
export default Component33175;
