import React from 'react';
const LABEL_36673 = 'component_36673';
export function Component36673({ value = 36673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36673, 'data-value': derived.doubled }, children);
}
export default Component36673;
