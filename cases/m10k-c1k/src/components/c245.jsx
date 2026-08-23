import React from 'react';
const LABEL_245 = 'component_245';
export function Component245({ value = 245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_245, 'data-value': derived.doubled }, children);
}
export default Component245;
