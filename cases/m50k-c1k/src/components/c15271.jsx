import React from 'react';
const LABEL_15271 = 'component_15271';
export function Component15271({ value = 15271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15271, 'data-value': derived.doubled }, children);
}
export default Component15271;
