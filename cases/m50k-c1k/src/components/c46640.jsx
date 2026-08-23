import React from 'react';
const LABEL_46640 = 'component_46640';
export function Component46640({ value = 46640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46640, 'data-value': derived.doubled }, children);
}
export default Component46640;
