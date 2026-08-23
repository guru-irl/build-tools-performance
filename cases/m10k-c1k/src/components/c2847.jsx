import React from 'react';
const LABEL_2847 = 'component_2847';
export function Component2847({ value = 2847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2847, 'data-value': derived.doubled }, children);
}
export default Component2847;
