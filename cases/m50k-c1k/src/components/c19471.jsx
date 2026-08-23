import React from 'react';
const LABEL_19471 = 'component_19471';
export function Component19471({ value = 19471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19471, 'data-value': derived.doubled }, children);
}
export default Component19471;
