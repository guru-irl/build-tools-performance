import React from 'react';
const LABEL_39690 = 'component_39690';
export function Component39690({ value = 39690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39690, 'data-value': derived.doubled }, children);
}
export default Component39690;
