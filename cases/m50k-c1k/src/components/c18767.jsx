import React from 'react';
const LABEL_18767 = 'component_18767';
export function Component18767({ value = 18767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18767, 'data-value': derived.doubled }, children);
}
export default Component18767;
