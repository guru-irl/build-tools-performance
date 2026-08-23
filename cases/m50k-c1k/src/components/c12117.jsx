import React from 'react';
const LABEL_12117 = 'component_12117';
export function Component12117({ value = 12117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12117, 'data-value': derived.doubled }, children);
}
export default Component12117;
