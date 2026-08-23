import React from 'react';
const LABEL_24665 = 'component_24665';
export function Component24665({ value = 24665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24665, 'data-value': derived.doubled }, children);
}
export default Component24665;
