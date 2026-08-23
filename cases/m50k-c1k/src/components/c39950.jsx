import React from 'react';
const LABEL_39950 = 'component_39950';
export function Component39950({ value = 39950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39950, 'data-value': derived.doubled }, children);
}
export default Component39950;
