import React from 'react';
const LABEL_46608 = 'component_46608';
export function Component46608({ value = 46608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46608, 'data-value': derived.doubled }, children);
}
export default Component46608;
