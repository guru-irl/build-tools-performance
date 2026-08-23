import React from 'react';
const LABEL_30634 = 'component_30634';
export function Component30634({ value = 30634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30634, 'data-value': derived.doubled }, children);
}
export default Component30634;
