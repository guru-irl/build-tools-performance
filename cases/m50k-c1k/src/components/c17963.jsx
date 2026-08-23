import React from 'react';
const LABEL_17963 = 'component_17963';
export function Component17963({ value = 17963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17963, 'data-value': derived.doubled }, children);
}
export default Component17963;
