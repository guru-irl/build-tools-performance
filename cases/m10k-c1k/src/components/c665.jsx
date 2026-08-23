import React from 'react';
const LABEL_665 = 'component_665';
export function Component665({ value = 665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_665, 'data-value': derived.doubled }, children);
}
export default Component665;
