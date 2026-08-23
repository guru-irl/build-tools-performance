import React from 'react';
const LABEL_13503 = 'component_13503';
export function Component13503({ value = 13503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13503, 'data-value': derived.doubled }, children);
}
export default Component13503;
