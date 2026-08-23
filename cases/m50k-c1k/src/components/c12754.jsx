import React from 'react';
const LABEL_12754 = 'component_12754';
export function Component12754({ value = 12754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12754, 'data-value': derived.doubled }, children);
}
export default Component12754;
