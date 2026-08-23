import React from 'react';
const LABEL_10673 = 'component_10673';
export function Component10673({ value = 10673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10673, 'data-value': derived.doubled }, children);
}
export default Component10673;
