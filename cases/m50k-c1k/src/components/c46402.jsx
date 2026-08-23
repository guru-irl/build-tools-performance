import React from 'react';
const LABEL_46402 = 'component_46402';
export function Component46402({ value = 46402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46402, 'data-value': derived.doubled }, children);
}
export default Component46402;
