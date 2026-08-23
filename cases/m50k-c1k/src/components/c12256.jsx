import React from 'react';
const LABEL_12256 = 'component_12256';
export function Component12256({ value = 12256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12256, 'data-value': derived.doubled }, children);
}
export default Component12256;
