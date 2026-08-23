import React from 'react';
const LABEL_17084 = 'component_17084';
export function Component17084({ value = 17084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17084, 'data-value': derived.doubled }, children);
}
export default Component17084;
