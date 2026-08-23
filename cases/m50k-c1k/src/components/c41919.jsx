import React from 'react';
const LABEL_41919 = 'component_41919';
export function Component41919({ value = 41919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41919, 'data-value': derived.doubled }, children);
}
export default Component41919;
