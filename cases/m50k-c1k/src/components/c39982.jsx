import React from 'react';
const LABEL_39982 = 'component_39982';
export function Component39982({ value = 39982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39982, 'data-value': derived.doubled }, children);
}
export default Component39982;
