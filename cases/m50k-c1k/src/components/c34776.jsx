import React from 'react';
const LABEL_34776 = 'component_34776';
export function Component34776({ value = 34776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34776, 'data-value': derived.doubled }, children);
}
export default Component34776;
