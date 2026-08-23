import React from 'react';
const LABEL_38689 = 'component_38689';
export function Component38689({ value = 38689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38689, 'data-value': derived.doubled }, children);
}
export default Component38689;
