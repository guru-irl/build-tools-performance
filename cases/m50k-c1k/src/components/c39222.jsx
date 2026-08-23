import React from 'react';
const LABEL_39222 = 'component_39222';
export function Component39222({ value = 39222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39222, 'data-value': derived.doubled }, children);
}
export default Component39222;
