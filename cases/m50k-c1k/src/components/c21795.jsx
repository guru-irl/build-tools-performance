import React from 'react';
const LABEL_21795 = 'component_21795';
export function Component21795({ value = 21795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21795, 'data-value': derived.doubled }, children);
}
export default Component21795;
