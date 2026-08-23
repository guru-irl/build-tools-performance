import React from 'react';
const LABEL_13665 = 'component_13665';
export function Component13665({ value = 13665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13665, 'data-value': derived.doubled }, children);
}
export default Component13665;
