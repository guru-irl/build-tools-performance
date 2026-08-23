import React from 'react';
const LABEL_25704 = 'component_25704';
export function Component25704({ value = 25704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25704, 'data-value': derived.doubled }, children);
}
export default Component25704;
