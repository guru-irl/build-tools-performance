import React from 'react';
const LABEL_39912 = 'component_39912';
export function Component39912({ value = 39912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39912, 'data-value': derived.doubled }, children);
}
export default Component39912;
