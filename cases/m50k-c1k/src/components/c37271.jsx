import React from 'react';
const LABEL_37271 = 'component_37271';
export function Component37271({ value = 37271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37271, 'data-value': derived.doubled }, children);
}
export default Component37271;
