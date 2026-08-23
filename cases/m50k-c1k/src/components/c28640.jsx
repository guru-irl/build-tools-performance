import React from 'react';
const LABEL_28640 = 'component_28640';
export function Component28640({ value = 28640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28640, 'data-value': derived.doubled }, children);
}
export default Component28640;
