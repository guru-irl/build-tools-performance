import React from 'react';
const LABEL_23290 = 'component_23290';
export function Component23290({ value = 23290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23290, 'data-value': derived.doubled }, children);
}
export default Component23290;
