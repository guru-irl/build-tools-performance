import React from 'react';
const LABEL_26516 = 'component_26516';
export function Component26516({ value = 26516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26516, 'data-value': derived.doubled }, children);
}
export default Component26516;
