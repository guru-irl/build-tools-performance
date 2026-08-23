import React from 'react';
const LABEL_20445 = 'component_20445';
export function Component20445({ value = 20445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20445, 'data-value': derived.doubled }, children);
}
export default Component20445;
