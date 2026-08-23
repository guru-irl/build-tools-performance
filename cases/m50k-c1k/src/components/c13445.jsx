import React from 'react';
const LABEL_13445 = 'component_13445';
export function Component13445({ value = 13445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13445, 'data-value': derived.doubled }, children);
}
export default Component13445;
