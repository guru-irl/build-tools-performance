import React from 'react';
const LABEL_6776 = 'component_6776';
export function Component6776({ value = 6776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6776, 'data-value': derived.doubled }, children);
}
export default Component6776;
