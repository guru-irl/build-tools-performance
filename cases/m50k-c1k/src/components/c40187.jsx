import React from 'react';
const LABEL_40187 = 'component_40187';
export function Component40187({ value = 40187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40187, 'data-value': derived.doubled }, children);
}
export default Component40187;
