import React from 'react';
const LABEL_46324 = 'component_46324';
export function Component46324({ value = 46324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46324, 'data-value': derived.doubled }, children);
}
export default Component46324;
