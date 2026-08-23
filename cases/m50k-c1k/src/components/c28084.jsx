import React from 'react';
const LABEL_28084 = 'component_28084';
export function Component28084({ value = 28084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28084, 'data-value': derived.doubled }, children);
}
export default Component28084;
