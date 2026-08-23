import React from 'react';
const LABEL_21788 = 'component_21788';
export function Component21788({ value = 21788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21788, 'data-value': derived.doubled }, children);
}
export default Component21788;
