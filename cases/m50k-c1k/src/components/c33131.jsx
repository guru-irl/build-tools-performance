import React from 'react';
const LABEL_33131 = 'component_33131';
export function Component33131({ value = 33131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33131, 'data-value': derived.doubled }, children);
}
export default Component33131;
