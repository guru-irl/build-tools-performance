import React from 'react';
const LABEL_29562 = 'component_29562';
export function Component29562({ value = 29562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29562, 'data-value': derived.doubled }, children);
}
export default Component29562;
