import React from 'react';
const LABEL_24596 = 'component_24596';
export function Component24596({ value = 24596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24596, 'data-value': derived.doubled }, children);
}
export default Component24596;
