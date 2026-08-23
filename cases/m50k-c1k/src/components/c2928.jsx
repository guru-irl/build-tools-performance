import React from 'react';
const LABEL_2928 = 'component_2928';
export function Component2928({ value = 2928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2928, 'data-value': derived.doubled }, children);
}
export default Component2928;
