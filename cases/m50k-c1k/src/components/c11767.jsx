import React from 'react';
const LABEL_11767 = 'component_11767';
export function Component11767({ value = 11767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11767, 'data-value': derived.doubled }, children);
}
export default Component11767;
