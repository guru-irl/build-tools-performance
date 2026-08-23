import React from 'react';
const LABEL_11640 = 'component_11640';
export function Component11640({ value = 11640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11640, 'data-value': derived.doubled }, children);
}
export default Component11640;
