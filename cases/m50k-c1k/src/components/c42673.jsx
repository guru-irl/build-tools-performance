import React from 'react';
const LABEL_42673 = 'component_42673';
export function Component42673({ value = 42673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42673, 'data-value': derived.doubled }, children);
}
export default Component42673;
