import React from 'react';
const LABEL_10254 = 'component_10254';
export function Component10254({ value = 10254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10254, 'data-value': derived.doubled }, children);
}
export default Component10254;
