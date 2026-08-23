import React from 'react';
const LABEL_19665 = 'component_19665';
export function Component19665({ value = 19665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19665, 'data-value': derived.doubled }, children);
}
export default Component19665;
