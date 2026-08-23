import React from 'react';
const LABEL_19654 = 'component_19654';
export function Component19654({ value = 19654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19654, 'data-value': derived.doubled }, children);
}
export default Component19654;
