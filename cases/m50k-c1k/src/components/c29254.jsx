import React from 'react';
const LABEL_29254 = 'component_29254';
export function Component29254({ value = 29254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29254, 'data-value': derived.doubled }, children);
}
export default Component29254;
