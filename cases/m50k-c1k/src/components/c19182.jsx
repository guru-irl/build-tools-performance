import React from 'react';
const LABEL_19182 = 'component_19182';
export function Component19182({ value = 19182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19182, 'data-value': derived.doubled }, children);
}
export default Component19182;
