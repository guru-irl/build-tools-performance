import React from 'react';
const LABEL_23479 = 'component_23479';
export function Component23479({ value = 23479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23479, 'data-value': derived.doubled }, children);
}
export default Component23479;
