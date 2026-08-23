import React from 'react';
const LABEL_25665 = 'component_25665';
export function Component25665({ value = 25665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25665, 'data-value': derived.doubled }, children);
}
export default Component25665;
