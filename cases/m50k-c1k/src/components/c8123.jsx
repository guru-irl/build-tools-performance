import React from 'react';
const LABEL_8123 = 'component_8123';
export function Component8123({ value = 8123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8123, 'data-value': derived.doubled }, children);
}
export default Component8123;
