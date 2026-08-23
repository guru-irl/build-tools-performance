import React from 'react';
const LABEL_30283 = 'component_30283';
export function Component30283({ value = 30283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30283, 'data-value': derived.doubled }, children);
}
export default Component30283;
