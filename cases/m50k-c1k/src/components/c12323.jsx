import React from 'react';
const LABEL_12323 = 'component_12323';
export function Component12323({ value = 12323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12323, 'data-value': derived.doubled }, children);
}
export default Component12323;
