import React from 'react';
const LABEL_22767 = 'component_22767';
export function Component22767({ value = 22767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22767, 'data-value': derived.doubled }, children);
}
export default Component22767;
