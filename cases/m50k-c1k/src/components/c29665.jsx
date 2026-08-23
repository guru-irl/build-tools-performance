import React from 'react';
const LABEL_29665 = 'component_29665';
export function Component29665({ value = 29665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29665, 'data-value': derived.doubled }, children);
}
export default Component29665;
