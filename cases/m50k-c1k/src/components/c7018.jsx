import React from 'react';
const LABEL_7018 = 'component_7018';
export function Component7018({ value = 7018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7018, 'data-value': derived.doubled }, children);
}
export default Component7018;
