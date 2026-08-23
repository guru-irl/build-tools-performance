import React from 'react';
const LABEL_28654 = 'component_28654';
export function Component28654({ value = 28654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28654, 'data-value': derived.doubled }, children);
}
export default Component28654;
