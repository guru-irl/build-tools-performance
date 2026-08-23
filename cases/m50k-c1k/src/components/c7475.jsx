import React from 'react';
const LABEL_7475 = 'component_7475';
export function Component7475({ value = 7475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7475, 'data-value': derived.doubled }, children);
}
export default Component7475;
