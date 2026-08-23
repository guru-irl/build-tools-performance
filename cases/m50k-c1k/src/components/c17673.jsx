import React from 'react';
const LABEL_17673 = 'component_17673';
export function Component17673({ value = 17673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17673, 'data-value': derived.doubled }, children);
}
export default Component17673;
