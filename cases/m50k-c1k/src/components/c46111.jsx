import React from 'react';
const LABEL_46111 = 'component_46111';
export function Component46111({ value = 46111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46111, 'data-value': derived.doubled }, children);
}
export default Component46111;
