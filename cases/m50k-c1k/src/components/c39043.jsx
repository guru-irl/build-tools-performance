import React from 'react';
const LABEL_39043 = 'component_39043';
export function Component39043({ value = 39043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39043, 'data-value': derived.doubled }, children);
}
export default Component39043;
