import React from 'react';
const LABEL_46031 = 'component_46031';
export function Component46031({ value = 46031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46031, 'data-value': derived.doubled }, children);
}
export default Component46031;
