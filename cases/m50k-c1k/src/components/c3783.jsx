import React from 'react';
const LABEL_3783 = 'component_3783';
export function Component3783({ value = 3783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3783, 'data-value': derived.doubled }, children);
}
export default Component3783;
