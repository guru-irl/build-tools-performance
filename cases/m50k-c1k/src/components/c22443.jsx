import React from 'react';
const LABEL_22443 = 'component_22443';
export function Component22443({ value = 22443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22443, 'data-value': derived.doubled }, children);
}
export default Component22443;
