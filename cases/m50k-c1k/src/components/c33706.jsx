import React from 'react';
const LABEL_33706 = 'component_33706';
export function Component33706({ value = 33706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33706, 'data-value': derived.doubled }, children);
}
export default Component33706;
