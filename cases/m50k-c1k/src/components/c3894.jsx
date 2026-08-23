import React from 'react';
const LABEL_3894 = 'component_3894';
export function Component3894({ value = 3894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3894, 'data-value': derived.doubled }, children);
}
export default Component3894;
