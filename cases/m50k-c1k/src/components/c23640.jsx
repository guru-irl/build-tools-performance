import React from 'react';
const LABEL_23640 = 'component_23640';
export function Component23640({ value = 23640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23640, 'data-value': derived.doubled }, children);
}
export default Component23640;
