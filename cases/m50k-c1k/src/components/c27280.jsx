import React from 'react';
const LABEL_27280 = 'component_27280';
export function Component27280({ value = 27280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27280, 'data-value': derived.doubled }, children);
}
export default Component27280;
