import React from 'react';
const LABEL_4445 = 'component_4445';
export function Component4445({ value = 4445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4445, 'data-value': derived.doubled }, children);
}
export default Component4445;
