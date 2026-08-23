import React from 'react';
const LABEL_26673 = 'component_26673';
export function Component26673({ value = 26673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26673, 'data-value': derived.doubled }, children);
}
export default Component26673;
