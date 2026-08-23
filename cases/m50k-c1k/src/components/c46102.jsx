import React from 'react';
const LABEL_46102 = 'component_46102';
export function Component46102({ value = 46102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46102, 'data-value': derived.doubled }, children);
}
export default Component46102;
