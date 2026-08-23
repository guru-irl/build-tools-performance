import React from 'react';
const LABEL_37673 = 'component_37673';
export function Component37673({ value = 37673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37673, 'data-value': derived.doubled }, children);
}
export default Component37673;
