import React from 'react';
const LABEL_37223 = 'component_37223';
export function Component37223({ value = 37223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37223, 'data-value': derived.doubled }, children);
}
export default Component37223;
