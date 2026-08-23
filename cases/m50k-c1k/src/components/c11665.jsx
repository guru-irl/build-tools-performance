import React from 'react';
const LABEL_11665 = 'component_11665';
export function Component11665({ value = 11665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11665, 'data-value': derived.doubled }, children);
}
export default Component11665;
