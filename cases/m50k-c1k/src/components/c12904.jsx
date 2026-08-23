import React from 'react';
const LABEL_12904 = 'component_12904';
export function Component12904({ value = 12904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12904, 'data-value': derived.doubled }, children);
}
export default Component12904;
