import React from 'react';
const LABEL_39824 = 'component_39824';
export function Component39824({ value = 39824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39824, 'data-value': derived.doubled }, children);
}
export default Component39824;
