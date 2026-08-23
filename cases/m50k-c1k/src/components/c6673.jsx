import React from 'react';
const LABEL_6673 = 'component_6673';
export function Component6673({ value = 6673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6673, 'data-value': derived.doubled }, children);
}
export default Component6673;
