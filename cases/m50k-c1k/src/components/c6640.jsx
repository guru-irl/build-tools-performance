import React from 'react';
const LABEL_6640 = 'component_6640';
export function Component6640({ value = 6640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6640, 'data-value': derived.doubled }, children);
}
export default Component6640;
