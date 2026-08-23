import React from 'react';
const LABEL_2739 = 'component_2739';
export function Component2739({ value = 2739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2739, 'data-value': derived.doubled }, children);
}
export default Component2739;
