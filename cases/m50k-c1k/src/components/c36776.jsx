import React from 'react';
const LABEL_36776 = 'component_36776';
export function Component36776({ value = 36776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36776, 'data-value': derived.doubled }, children);
}
export default Component36776;
