import React from 'react';
const LABEL_39499 = 'component_39499';
export function Component39499({ value = 39499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39499, 'data-value': derived.doubled }, children);
}
export default Component39499;
