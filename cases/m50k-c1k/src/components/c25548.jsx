import React from 'react';
const LABEL_25548 = 'component_25548';
export function Component25548({ value = 25548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25548, 'data-value': derived.doubled }, children);
}
export default Component25548;
