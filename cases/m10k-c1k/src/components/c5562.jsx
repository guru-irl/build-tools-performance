import React from 'react';
const LABEL_5562 = 'component_5562';
export function Component5562({ value = 5562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5562, 'data-value': derived.doubled }, children);
}
export default Component5562;
