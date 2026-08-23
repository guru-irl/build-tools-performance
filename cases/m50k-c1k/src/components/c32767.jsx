import React from 'react';
const LABEL_32767 = 'component_32767';
export function Component32767({ value = 32767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32767, 'data-value': derived.doubled }, children);
}
export default Component32767;
