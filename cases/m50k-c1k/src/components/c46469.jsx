import React from 'react';
const LABEL_46469 = 'component_46469';
export function Component46469({ value = 46469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46469, 'data-value': derived.doubled }, children);
}
export default Component46469;
