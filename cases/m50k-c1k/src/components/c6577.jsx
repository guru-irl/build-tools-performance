import React from 'react';
const LABEL_6577 = 'component_6577';
export function Component6577({ value = 6577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6577, 'data-value': derived.doubled }, children);
}
export default Component6577;
