import React from 'react';
const LABEL_18453 = 'component_18453';
export function Component18453({ value = 18453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18453, 'data-value': derived.doubled }, children);
}
export default Component18453;
