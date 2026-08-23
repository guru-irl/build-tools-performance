import React from 'react';
const LABEL_32445 = 'component_32445';
export function Component32445({ value = 32445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32445, 'data-value': derived.doubled }, children);
}
export default Component32445;
