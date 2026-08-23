import React from 'react';
const LABEL_46084 = 'component_46084';
export function Component46084({ value = 46084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46084, 'data-value': derived.doubled }, children);
}
export default Component46084;
