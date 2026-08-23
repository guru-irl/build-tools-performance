import React from 'react';
const LABEL_36812 = 'component_36812';
export function Component36812({ value = 36812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36812, 'data-value': derived.doubled }, children);
}
export default Component36812;
