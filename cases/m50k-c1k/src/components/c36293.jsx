import React from 'react';
const LABEL_36293 = 'component_36293';
export function Component36293({ value = 36293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36293, 'data-value': derived.doubled }, children);
}
export default Component36293;
