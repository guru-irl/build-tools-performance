import React from 'react';
const LABEL_23312 = 'component_23312';
export function Component23312({ value = 23312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23312, 'data-value': derived.doubled }, children);
}
export default Component23312;
