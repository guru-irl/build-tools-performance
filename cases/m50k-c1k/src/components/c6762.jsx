import React from 'react';
const LABEL_6762 = 'component_6762';
export function Component6762({ value = 6762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6762, 'data-value': derived.doubled }, children);
}
export default Component6762;
