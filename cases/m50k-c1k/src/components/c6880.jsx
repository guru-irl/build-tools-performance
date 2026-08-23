import React from 'react';
const LABEL_6880 = 'component_6880';
export function Component6880({ value = 6880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6880, 'data-value': derived.doubled }, children);
}
export default Component6880;
