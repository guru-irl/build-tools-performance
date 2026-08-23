import React from 'react';
const LABEL_46738 = 'component_46738';
export function Component46738({ value = 46738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46738, 'data-value': derived.doubled }, children);
}
export default Component46738;
