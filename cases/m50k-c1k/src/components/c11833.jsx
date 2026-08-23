import React from 'react';
const LABEL_11833 = 'component_11833';
export function Component11833({ value = 11833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11833, 'data-value': derived.doubled }, children);
}
export default Component11833;
