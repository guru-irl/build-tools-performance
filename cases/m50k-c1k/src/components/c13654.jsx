import React from 'react';
const LABEL_13654 = 'component_13654';
export function Component13654({ value = 13654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13654, 'data-value': derived.doubled }, children);
}
export default Component13654;
