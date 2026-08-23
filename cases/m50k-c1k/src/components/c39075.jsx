import React from 'react';
const LABEL_39075 = 'component_39075';
export function Component39075({ value = 39075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39075, 'data-value': derived.doubled }, children);
}
export default Component39075;
