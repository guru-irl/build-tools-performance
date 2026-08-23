import React from 'react';
const LABEL_38665 = 'component_38665';
export function Component38665({ value = 38665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38665, 'data-value': derived.doubled }, children);
}
export default Component38665;
