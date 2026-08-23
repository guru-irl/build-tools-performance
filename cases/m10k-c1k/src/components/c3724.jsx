import React from 'react';
const LABEL_3724 = 'component_3724';
export function Component3724({ value = 3724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3724, 'data-value': derived.doubled }, children);
}
export default Component3724;
