import React from 'react';
const LABEL_39629 = 'component_39629';
export function Component39629({ value = 39629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39629, 'data-value': derived.doubled }, children);
}
export default Component39629;
