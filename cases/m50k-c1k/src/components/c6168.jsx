import React from 'react';
const LABEL_6168 = 'component_6168';
export function Component6168({ value = 6168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6168, 'data-value': derived.doubled }, children);
}
export default Component6168;
