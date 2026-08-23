import React from 'react';
const LABEL_29329 = 'component_29329';
export function Component29329({ value = 29329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29329, 'data-value': derived.doubled }, children);
}
export default Component29329;
