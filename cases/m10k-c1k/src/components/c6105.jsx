import React from 'react';
const LABEL_6105 = 'component_6105';
export function Component6105({ value = 6105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6105, 'data-value': derived.doubled }, children);
}
export default Component6105;
