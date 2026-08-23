import React from 'react';
const LABEL_3446 = 'component_3446';
export function Component3446({ value = 3446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3446, 'data-value': derived.doubled }, children);
}
export default Component3446;
