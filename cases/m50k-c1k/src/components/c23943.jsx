import React from 'react';
const LABEL_23943 = 'component_23943';
export function Component23943({ value = 23943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23943, 'data-value': derived.doubled }, children);
}
export default Component23943;
