import React from 'react';
const LABEL_5612 = 'component_5612';
export function Component5612({ value = 5612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5612, 'data-value': derived.doubled }, children);
}
export default Component5612;
