import React from 'react';
const LABEL_4093 = 'component_4093';
export function Component4093({ value = 4093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4093, 'data-value': derived.doubled }, children);
}
export default Component4093;
