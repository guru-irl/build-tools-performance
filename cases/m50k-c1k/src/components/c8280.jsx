import React from 'react';
const LABEL_8280 = 'component_8280';
export function Component8280({ value = 8280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8280, 'data-value': derived.doubled }, children);
}
export default Component8280;
