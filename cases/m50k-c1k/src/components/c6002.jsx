import React from 'react';
const LABEL_6002 = 'component_6002';
export function Component6002({ value = 6002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6002, 'data-value': derived.doubled }, children);
}
export default Component6002;
