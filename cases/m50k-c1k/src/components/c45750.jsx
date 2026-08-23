import React from 'react';
const LABEL_45750 = 'component_45750';
export function Component45750({ value = 45750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45750, 'data-value': derived.doubled }, children);
}
export default Component45750;
