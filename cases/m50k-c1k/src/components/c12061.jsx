import React from 'react';
const LABEL_12061 = 'component_12061';
export function Component12061({ value = 12061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12061, 'data-value': derived.doubled }, children);
}
export default Component12061;
