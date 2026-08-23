import React from 'react';
const LABEL_46280 = 'component_46280';
export function Component46280({ value = 46280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46280, 'data-value': derived.doubled }, children);
}
export default Component46280;
