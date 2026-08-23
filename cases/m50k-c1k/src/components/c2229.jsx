import React from 'react';
const LABEL_2229 = 'component_2229';
export function Component2229({ value = 2229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2229, 'data-value': derived.doubled }, children);
}
export default Component2229;
