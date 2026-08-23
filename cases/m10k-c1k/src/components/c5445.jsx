import React from 'react';
const LABEL_5445 = 'component_5445';
export function Component5445({ value = 5445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5445, 'data-value': derived.doubled }, children);
}
export default Component5445;
