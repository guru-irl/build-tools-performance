import React from 'react';
const LABEL_4471 = 'component_4471';
export function Component4471({ value = 4471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4471, 'data-value': derived.doubled }, children);
}
export default Component4471;
