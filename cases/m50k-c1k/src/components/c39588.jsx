import React from 'react';
const LABEL_39588 = 'component_39588';
export function Component39588({ value = 39588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39588, 'data-value': derived.doubled }, children);
}
export default Component39588;
