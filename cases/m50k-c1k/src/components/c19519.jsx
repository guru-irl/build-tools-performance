import React from 'react';
const LABEL_19519 = 'component_19519';
export function Component19519({ value = 19519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19519, 'data-value': derived.doubled }, children);
}
export default Component19519;
