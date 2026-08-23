import React from 'react';
const LABEL_6102 = 'component_6102';
export function Component6102({ value = 6102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6102, 'data-value': derived.doubled }, children);
}
export default Component6102;
