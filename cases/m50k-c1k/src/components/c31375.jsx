import React from 'react';
const LABEL_31375 = 'component_31375';
export function Component31375({ value = 31375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31375, 'data-value': derived.doubled }, children);
}
export default Component31375;
