import React from 'react';
const LABEL_1673 = 'component_1673';
export function Component1673({ value = 1673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1673, 'data-value': derived.doubled }, children);
}
export default Component1673;
