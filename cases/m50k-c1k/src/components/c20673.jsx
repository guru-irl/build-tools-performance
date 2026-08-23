import React from 'react';
const LABEL_20673 = 'component_20673';
export function Component20673({ value = 20673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20673, 'data-value': derived.doubled }, children);
}
export default Component20673;
