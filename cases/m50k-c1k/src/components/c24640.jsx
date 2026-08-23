import React from 'react';
const LABEL_24640 = 'component_24640';
export function Component24640({ value = 24640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24640, 'data-value': derived.doubled }, children);
}
export default Component24640;
