import React from 'react';
const LABEL_18738 = 'component_18738';
export function Component18738({ value = 18738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18738, 'data-value': derived.doubled }, children);
}
export default Component18738;
