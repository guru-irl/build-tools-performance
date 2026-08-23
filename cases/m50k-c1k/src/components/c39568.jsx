import React from 'react';
const LABEL_39568 = 'component_39568';
export function Component39568({ value = 39568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39568, 'data-value': derived.doubled }, children);
}
export default Component39568;
