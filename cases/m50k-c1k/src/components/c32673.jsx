import React from 'react';
const LABEL_32673 = 'component_32673';
export function Component32673({ value = 32673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32673, 'data-value': derived.doubled }, children);
}
export default Component32673;
