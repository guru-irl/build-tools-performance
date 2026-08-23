import React from 'react';
const LABEL_12098 = 'component_12098';
export function Component12098({ value = 12098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12098, 'data-value': derived.doubled }, children);
}
export default Component12098;
