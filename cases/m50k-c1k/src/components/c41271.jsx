import React from 'react';
const LABEL_41271 = 'component_41271';
export function Component41271({ value = 41271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41271, 'data-value': derived.doubled }, children);
}
export default Component41271;
