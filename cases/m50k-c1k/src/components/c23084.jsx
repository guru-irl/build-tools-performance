import React from 'react';
const LABEL_23084 = 'component_23084';
export function Component23084({ value = 23084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23084, 'data-value': derived.doubled }, children);
}
export default Component23084;
