import React from 'react';
const LABEL_46673 = 'component_46673';
export function Component46673({ value = 46673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46673, 'data-value': derived.doubled }, children);
}
export default Component46673;
