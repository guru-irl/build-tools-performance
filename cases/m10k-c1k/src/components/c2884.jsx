import React from 'react';
const LABEL_2884 = 'component_2884';
export function Component2884({ value = 2884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2884, 'data-value': derived.doubled }, children);
}
export default Component2884;
