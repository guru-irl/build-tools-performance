import React from 'react';
const LABEL_16445 = 'component_16445';
export function Component16445({ value = 16445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16445, 'data-value': derived.doubled }, children);
}
export default Component16445;
