import React from 'react';
const LABEL_29758 = 'component_29758';
export function Component29758({ value = 29758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29758, 'data-value': derived.doubled }, children);
}
export default Component29758;
