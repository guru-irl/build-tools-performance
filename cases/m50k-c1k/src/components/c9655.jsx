import React from 'react';
const LABEL_9655 = 'component_9655';
export function Component9655({ value = 9655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9655, 'data-value': derived.doubled }, children);
}
export default Component9655;
