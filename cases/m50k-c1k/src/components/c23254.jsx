import React from 'react';
const LABEL_23254 = 'component_23254';
export function Component23254({ value = 23254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23254, 'data-value': derived.doubled }, children);
}
export default Component23254;
