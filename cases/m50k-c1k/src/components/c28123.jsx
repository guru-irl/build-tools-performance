import React from 'react';
const LABEL_28123 = 'component_28123';
export function Component28123({ value = 28123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28123, 'data-value': derived.doubled }, children);
}
export default Component28123;
