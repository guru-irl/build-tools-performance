import React from 'react';
const LABEL_39549 = 'component_39549';
export function Component39549({ value = 39549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39549, 'data-value': derived.doubled }, children);
}
export default Component39549;
