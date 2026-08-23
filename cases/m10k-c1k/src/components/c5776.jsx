import React from 'react';
const LABEL_5776 = 'component_5776';
export function Component5776({ value = 5776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5776, 'data-value': derived.doubled }, children);
}
export default Component5776;
