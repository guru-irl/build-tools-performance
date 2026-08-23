import React from 'react';
const LABEL_37640 = 'component_37640';
export function Component37640({ value = 37640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37640, 'data-value': derived.doubled }, children);
}
export default Component37640;
