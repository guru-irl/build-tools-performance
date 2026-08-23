import React from 'react';
const LABEL_26271 = 'component_26271';
export function Component26271({ value = 26271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26271, 'data-value': derived.doubled }, children);
}
export default Component26271;
