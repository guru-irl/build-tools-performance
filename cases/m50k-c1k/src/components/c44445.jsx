import React from 'react';
const LABEL_44445 = 'component_44445';
export function Component44445({ value = 44445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44445, 'data-value': derived.doubled }, children);
}
export default Component44445;
