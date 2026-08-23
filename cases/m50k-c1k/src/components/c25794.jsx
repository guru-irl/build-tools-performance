import React from 'react';
const LABEL_25794 = 'component_25794';
export function Component25794({ value = 25794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25794, 'data-value': derived.doubled }, children);
}
export default Component25794;
