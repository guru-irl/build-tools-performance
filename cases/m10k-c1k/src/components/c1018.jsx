import React from 'react';
const LABEL_1018 = 'component_1018';
export function Component1018({ value = 1018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1018, 'data-value': derived.doubled }, children);
}
export default Component1018;
