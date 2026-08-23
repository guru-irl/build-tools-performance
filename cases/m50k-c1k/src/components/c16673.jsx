import React from 'react';
const LABEL_16673 = 'component_16673';
export function Component16673({ value = 16673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16673, 'data-value': derived.doubled }, children);
}
export default Component16673;
