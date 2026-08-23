import React from 'react';
const LABEL_46767 = 'component_46767';
export function Component46767({ value = 46767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46767, 'data-value': derived.doubled }, children);
}
export default Component46767;
