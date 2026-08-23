import React from 'react';
const LABEL_654 = 'component_654';
export function Component654({ value = 654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_654, 'data-value': derived.doubled }, children);
}
export default Component654;
