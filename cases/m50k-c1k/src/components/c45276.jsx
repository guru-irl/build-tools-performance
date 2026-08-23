import React from 'react';
const LABEL_45276 = 'component_45276';
export function Component45276({ value = 45276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45276, 'data-value': derived.doubled }, children);
}
export default Component45276;
