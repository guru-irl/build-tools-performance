import React from 'react';
const LABEL_2123 = 'component_2123';
export function Component2123({ value = 2123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2123, 'data-value': derived.doubled }, children);
}
export default Component2123;
