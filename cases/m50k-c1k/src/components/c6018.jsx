import React from 'react';
const LABEL_6018 = 'component_6018';
export function Component6018({ value = 6018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6018, 'data-value': derived.doubled }, children);
}
export default Component6018;
