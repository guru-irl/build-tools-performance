import React from 'react';
const LABEL_2294 = 'component_2294';
export function Component2294({ value = 2294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2294, 'data-value': derived.doubled }, children);
}
export default Component2294;
