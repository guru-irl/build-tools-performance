import React from 'react';
const LABEL_21727 = 'component_21727';
export function Component21727({ value = 21727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21727, 'data-value': derived.doubled }, children);
}
export default Component21727;
