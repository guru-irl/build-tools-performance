import React from 'react';
const LABEL_25063 = 'component_25063';
export function Component25063({ value = 25063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25063, 'data-value': derived.doubled }, children);
}
export default Component25063;
