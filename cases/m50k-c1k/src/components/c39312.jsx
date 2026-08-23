import React from 'react';
const LABEL_39312 = 'component_39312';
export function Component39312({ value = 39312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39312, 'data-value': derived.doubled }, children);
}
export default Component39312;
