import React from 'react';
const LABEL_10640 = 'component_10640';
export function Component10640({ value = 10640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10640, 'data-value': derived.doubled }, children);
}
export default Component10640;
