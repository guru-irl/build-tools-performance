import React from 'react';
const LABEL_46864 = 'component_46864';
export function Component46864({ value = 46864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46864, 'data-value': derived.doubled }, children);
}
export default Component46864;
