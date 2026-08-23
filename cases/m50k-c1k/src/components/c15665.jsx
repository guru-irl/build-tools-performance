import React from 'react';
const LABEL_15665 = 'component_15665';
export function Component15665({ value = 15665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15665, 'data-value': derived.doubled }, children);
}
export default Component15665;
