import React from 'react';
const LABEL_24767 = 'component_24767';
export function Component24767({ value = 24767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24767, 'data-value': derived.doubled }, children);
}
export default Component24767;
