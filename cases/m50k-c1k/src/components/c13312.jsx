import React from 'react';
const LABEL_13312 = 'component_13312';
export function Component13312({ value = 13312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13312, 'data-value': derived.doubled }, children);
}
export default Component13312;
