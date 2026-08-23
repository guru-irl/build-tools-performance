import React from 'react';
const LABEL_16254 = 'component_16254';
export function Component16254({ value = 16254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16254, 'data-value': derived.doubled }, children);
}
export default Component16254;
