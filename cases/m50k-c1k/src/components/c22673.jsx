import React from 'react';
const LABEL_22673 = 'component_22673';
export function Component22673({ value = 22673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22673, 'data-value': derived.doubled }, children);
}
export default Component22673;
