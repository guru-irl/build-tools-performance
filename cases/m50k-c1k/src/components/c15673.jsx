import React from 'react';
const LABEL_15673 = 'component_15673';
export function Component15673({ value = 15673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15673, 'data-value': derived.doubled }, children);
}
export default Component15673;
