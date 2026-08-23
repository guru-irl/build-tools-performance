import React from 'react';
const LABEL_17576 = 'component_17576';
export function Component17576({ value = 17576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17576, 'data-value': derived.doubled }, children);
}
export default Component17576;
