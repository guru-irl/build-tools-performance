import React from 'react';
const LABEL_3443 = 'component_3443';
export function Component3443({ value = 3443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3443, 'data-value': derived.doubled }, children);
}
export default Component3443;
