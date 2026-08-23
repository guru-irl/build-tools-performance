import React from 'react';
const LABEL_39109 = 'component_39109';
export function Component39109({ value = 39109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39109, 'data-value': derived.doubled }, children);
}
export default Component39109;
