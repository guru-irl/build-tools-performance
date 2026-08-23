import React from 'react';
const LABEL_4767 = 'component_4767';
export function Component4767({ value = 4767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4767, 'data-value': derived.doubled }, children);
}
export default Component4767;
