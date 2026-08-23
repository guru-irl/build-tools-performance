import React from 'react';
const LABEL_23690 = 'component_23690';
export function Component23690({ value = 23690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23690, 'data-value': derived.doubled }, children);
}
export default Component23690;
