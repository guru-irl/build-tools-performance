import React from 'react';
const LABEL_28280 = 'component_28280';
export function Component28280({ value = 28280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28280, 'data-value': derived.doubled }, children);
}
export default Component28280;
