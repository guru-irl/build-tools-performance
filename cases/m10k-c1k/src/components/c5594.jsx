import React from 'react';
const LABEL_5594 = 'component_5594';
export function Component5594({ value = 5594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5594, 'data-value': derived.doubled }, children);
}
export default Component5594;
