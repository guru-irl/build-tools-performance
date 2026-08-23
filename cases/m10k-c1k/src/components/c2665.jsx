import React from 'react';
const LABEL_2665 = 'component_2665';
export function Component2665({ value = 2665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2665, 'data-value': derived.doubled }, children);
}
export default Component2665;
