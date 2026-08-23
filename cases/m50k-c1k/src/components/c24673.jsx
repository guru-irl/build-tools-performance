import React from 'react';
const LABEL_24673 = 'component_24673';
export function Component24673({ value = 24673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24673, 'data-value': derived.doubled }, children);
}
export default Component24673;
