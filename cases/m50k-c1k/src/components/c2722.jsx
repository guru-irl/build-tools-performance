import React from 'react';
const LABEL_2722 = 'component_2722';
export function Component2722({ value = 2722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2722, 'data-value': derived.doubled }, children);
}
export default Component2722;
