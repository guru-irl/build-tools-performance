import React from 'react';
const LABEL_21640 = 'component_21640';
export function Component21640({ value = 21640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21640, 'data-value': derived.doubled }, children);
}
export default Component21640;
