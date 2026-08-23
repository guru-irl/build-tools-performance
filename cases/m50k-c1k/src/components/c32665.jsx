import React from 'react';
const LABEL_32665 = 'component_32665';
export function Component32665({ value = 32665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32665, 'data-value': derived.doubled }, children);
}
export default Component32665;
