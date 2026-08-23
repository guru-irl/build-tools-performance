import React from 'react';
const LABEL_26963 = 'component_26963';
export function Component26963({ value = 26963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26963, 'data-value': derived.doubled }, children);
}
export default Component26963;
