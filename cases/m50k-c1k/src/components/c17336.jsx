import React from 'react';
const LABEL_17336 = 'component_17336';
export function Component17336({ value = 17336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17336, 'data-value': derived.doubled }, children);
}
export default Component17336;
