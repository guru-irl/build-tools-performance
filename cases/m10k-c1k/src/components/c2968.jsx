import React from 'react';
const LABEL_2968 = 'component_2968';
export function Component2968({ value = 2968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2968, 'data-value': derived.doubled }, children);
}
export default Component2968;
