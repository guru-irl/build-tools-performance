import React from 'react';
const LABEL_16704 = 'component_16704';
export function Component16704({ value = 16704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16704, 'data-value': derived.doubled }, children);
}
export default Component16704;
