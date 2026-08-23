import React from 'react';
const LABEL_6402 = 'component_6402';
export function Component6402({ value = 6402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6402, 'data-value': derived.doubled }, children);
}
export default Component6402;
