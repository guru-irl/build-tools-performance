import React from 'react';
const LABEL_5271 = 'component_5271';
export function Component5271({ value = 5271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5271, 'data-value': derived.doubled }, children);
}
export default Component5271;
