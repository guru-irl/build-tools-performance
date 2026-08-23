import React from 'react';
const LABEL_12910 = 'component_12910';
export function Component12910({ value = 12910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12910, 'data-value': derived.doubled }, children);
}
export default Component12910;
