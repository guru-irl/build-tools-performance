import React from 'react';
const LABEL_32245 = 'component_32245';
export function Component32245({ value = 32245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32245, 'data-value': derived.doubled }, children);
}
export default Component32245;
