import React from 'react';
const LABEL_12881 = 'component_12881';
export function Component12881({ value = 12881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12881, 'data-value': derived.doubled }, children);
}
export default Component12881;
