import React from 'react';
const LABEL_46630 = 'component_46630';
export function Component46630({ value = 46630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46630, 'data-value': derived.doubled }, children);
}
export default Component46630;
