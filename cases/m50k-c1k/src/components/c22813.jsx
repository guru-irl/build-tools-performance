import React from 'react';
const LABEL_22813 = 'component_22813';
export function Component22813({ value = 22813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22813, 'data-value': derived.doubled }, children);
}
export default Component22813;
