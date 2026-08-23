import React from 'react';
const LABEL_2134 = 'component_2134';
export function Component2134({ value = 2134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2134, 'data-value': derived.doubled }, children);
}
export default Component2134;
