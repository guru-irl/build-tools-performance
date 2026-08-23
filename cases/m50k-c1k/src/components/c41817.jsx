import React from 'react';
const LABEL_41817 = 'component_41817';
export function Component41817({ value = 41817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41817, 'data-value': derived.doubled }, children);
}
export default Component41817;
