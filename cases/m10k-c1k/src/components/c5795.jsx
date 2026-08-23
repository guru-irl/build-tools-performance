import React from 'react';
const LABEL_5795 = 'component_5795';
export function Component5795({ value = 5795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5795, 'data-value': derived.doubled }, children);
}
export default Component5795;
