import React from 'react';
const LABEL_21776 = 'component_21776';
export function Component21776({ value = 21776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21776, 'data-value': derived.doubled }, children);
}
export default Component21776;
