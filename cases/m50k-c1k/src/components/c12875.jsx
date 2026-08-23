import React from 'react';
const LABEL_12875 = 'component_12875';
export function Component12875({ value = 12875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12875, 'data-value': derived.doubled }, children);
}
export default Component12875;
