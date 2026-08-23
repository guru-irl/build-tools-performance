import React from 'react';
const LABEL_6605 = 'component_6605';
export function Component6605({ value = 6605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6605, 'data-value': derived.doubled }, children);
}
export default Component6605;
