import React from 'react';
const LABEL_13079 = 'component_13079';
export function Component13079({ value = 13079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13079, 'data-value': derived.doubled }, children);
}
export default Component13079;
