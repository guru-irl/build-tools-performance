import React from 'react';
const LABEL_46117 = 'component_46117';
export function Component46117({ value = 46117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46117, 'data-value': derived.doubled }, children);
}
export default Component46117;
