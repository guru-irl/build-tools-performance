import React from 'react';
const LABEL_28293 = 'component_28293';
export function Component28293({ value = 28293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28293, 'data-value': derived.doubled }, children);
}
export default Component28293;
