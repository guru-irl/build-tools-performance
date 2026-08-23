import React from 'react';
const LABEL_46715 = 'component_46715';
export function Component46715({ value = 46715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46715, 'data-value': derived.doubled }, children);
}
export default Component46715;
