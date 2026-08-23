import React from 'react';
const LABEL_22290 = 'component_22290';
export function Component22290({ value = 22290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22290, 'data-value': derived.doubled }, children);
}
export default Component22290;
