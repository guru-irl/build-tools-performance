import React from 'react';
const LABEL_10795 = 'component_10795';
export function Component10795({ value = 10795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10795, 'data-value': derived.doubled }, children);
}
export default Component10795;
