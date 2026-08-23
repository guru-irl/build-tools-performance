import React from 'react';
const LABEL_12393 = 'component_12393';
export function Component12393({ value = 12393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12393, 'data-value': derived.doubled }, children);
}
export default Component12393;
