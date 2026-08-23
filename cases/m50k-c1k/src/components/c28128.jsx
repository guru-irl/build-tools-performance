import React from 'react';
const LABEL_28128 = 'component_28128';
export function Component28128({ value = 28128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28128, 'data-value': derived.doubled }, children);
}
export default Component28128;
