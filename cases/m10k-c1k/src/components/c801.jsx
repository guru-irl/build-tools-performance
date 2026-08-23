import React from 'react';
const LABEL_801 = 'component_801';
export function Component801({ value = 801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_801, 'data-value': derived.doubled }, children);
}
export default Component801;
