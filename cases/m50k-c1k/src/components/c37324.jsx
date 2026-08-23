import React from 'react';
const LABEL_37324 = 'component_37324';
export function Component37324({ value = 37324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37324, 'data-value': derived.doubled }, children);
}
export default Component37324;
