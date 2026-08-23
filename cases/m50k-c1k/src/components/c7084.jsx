import React from 'react';
const LABEL_7084 = 'component_7084';
export function Component7084({ value = 7084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7084, 'data-value': derived.doubled }, children);
}
export default Component7084;
