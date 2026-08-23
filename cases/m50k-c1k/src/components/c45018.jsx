import React from 'react';
const LABEL_45018 = 'component_45018';
export function Component45018({ value = 45018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45018, 'data-value': derived.doubled }, children);
}
export default Component45018;
