import React from 'react';
const LABEL_17536 = 'component_17536';
export function Component17536({ value = 17536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17536, 'data-value': derived.doubled }, children);
}
export default Component17536;
