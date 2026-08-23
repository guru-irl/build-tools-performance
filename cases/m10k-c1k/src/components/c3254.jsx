import React from 'react';
const LABEL_3254 = 'component_3254';
export function Component3254({ value = 3254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3254, 'data-value': derived.doubled }, children);
}
export default Component3254;
