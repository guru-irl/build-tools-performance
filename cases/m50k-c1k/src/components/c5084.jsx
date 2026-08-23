import React from 'react';
const LABEL_5084 = 'component_5084';
export function Component5084({ value = 5084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5084, 'data-value': derived.doubled }, children);
}
export default Component5084;
