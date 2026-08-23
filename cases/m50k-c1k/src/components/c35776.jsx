import React from 'react';
const LABEL_35776 = 'component_35776';
export function Component35776({ value = 35776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35776, 'data-value': derived.doubled }, children);
}
export default Component35776;
