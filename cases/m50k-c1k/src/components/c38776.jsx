import React from 'react';
const LABEL_38776 = 'component_38776';
export function Component38776({ value = 38776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38776, 'data-value': derived.doubled }, children);
}
export default Component38776;
