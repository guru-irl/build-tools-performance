import React from 'react';
const LABEL_25776 = 'component_25776';
export function Component25776({ value = 25776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25776, 'data-value': derived.doubled }, children);
}
export default Component25776;
