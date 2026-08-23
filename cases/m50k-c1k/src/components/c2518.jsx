import React from 'react';
const LABEL_2518 = 'component_2518';
export function Component2518({ value = 2518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2518, 'data-value': derived.doubled }, children);
}
export default Component2518;
