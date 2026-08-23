import React from 'react';
const LABEL_21443 = 'component_21443';
export function Component21443({ value = 21443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21443, 'data-value': derived.doubled }, children);
}
export default Component21443;
