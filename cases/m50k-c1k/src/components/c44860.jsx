import React from 'react';
const LABEL_44860 = 'component_44860';
export function Component44860({ value = 44860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44860, 'data-value': derived.doubled }, children);
}
export default Component44860;
