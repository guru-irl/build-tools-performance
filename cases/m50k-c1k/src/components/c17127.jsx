import React from 'react';
const LABEL_17127 = 'component_17127';
export function Component17127({ value = 17127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17127, 'data-value': derived.doubled }, children);
}
export default Component17127;
