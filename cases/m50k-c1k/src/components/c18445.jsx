import React from 'react';
const LABEL_18445 = 'component_18445';
export function Component18445({ value = 18445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18445, 'data-value': derived.doubled }, children);
}
export default Component18445;
