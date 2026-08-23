import React from 'react';
const LABEL_46600 = 'component_46600';
export function Component46600({ value = 46600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46600, 'data-value': derived.doubled }, children);
}
export default Component46600;
