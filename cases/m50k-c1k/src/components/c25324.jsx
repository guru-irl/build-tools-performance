import React from 'react';
const LABEL_25324 = 'component_25324';
export function Component25324({ value = 25324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25324, 'data-value': derived.doubled }, children);
}
export default Component25324;
