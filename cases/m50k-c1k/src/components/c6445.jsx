import React from 'react';
const LABEL_6445 = 'component_6445';
export function Component6445({ value = 6445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6445, 'data-value': derived.doubled }, children);
}
export default Component6445;
