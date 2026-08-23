import React from 'react';
const LABEL_10621 = 'component_10621';
export function Component10621({ value = 10621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10621, 'data-value': derived.doubled }, children);
}
export default Component10621;
