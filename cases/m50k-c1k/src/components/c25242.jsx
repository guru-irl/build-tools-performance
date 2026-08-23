import React from 'react';
const LABEL_25242 = 'component_25242';
export function Component25242({ value = 25242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25242, 'data-value': derived.doubled }, children);
}
export default Component25242;
