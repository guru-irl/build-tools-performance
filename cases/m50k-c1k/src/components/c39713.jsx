import React from 'react';
const LABEL_39713 = 'component_39713';
export function Component39713({ value = 39713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39713, 'data-value': derived.doubled }, children);
}
export default Component39713;
