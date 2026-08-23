import React from 'react';
const LABEL_39293 = 'component_39293';
export function Component39293({ value = 39293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39293, 'data-value': derived.doubled }, children);
}
export default Component39293;
