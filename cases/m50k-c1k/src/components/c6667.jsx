import React from 'react';
const LABEL_6667 = 'component_6667';
export function Component6667({ value = 6667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6667, 'data-value': derived.doubled }, children);
}
export default Component6667;
