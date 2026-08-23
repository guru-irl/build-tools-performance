import React from 'react';
const LABEL_28589 = 'component_28589';
export function Component28589({ value = 28589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28589, 'data-value': derived.doubled }, children);
}
export default Component28589;
