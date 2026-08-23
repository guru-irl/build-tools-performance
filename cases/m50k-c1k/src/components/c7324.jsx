import React from 'react';
const LABEL_7324 = 'component_7324';
export function Component7324({ value = 7324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7324, 'data-value': derived.doubled }, children);
}
export default Component7324;
