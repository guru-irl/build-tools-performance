import React from 'react';
const LABEL_39829 = 'component_39829';
export function Component39829({ value = 39829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39829, 'data-value': derived.doubled }, children);
}
export default Component39829;
