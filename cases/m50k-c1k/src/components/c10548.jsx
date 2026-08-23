import React from 'react';
const LABEL_10548 = 'component_10548';
export function Component10548({ value = 10548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10548, 'data-value': derived.doubled }, children);
}
export default Component10548;
