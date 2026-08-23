import React from 'react';
const LABEL_6690 = 'component_6690';
export function Component6690({ value = 6690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6690, 'data-value': derived.doubled }, children);
}
export default Component6690;
