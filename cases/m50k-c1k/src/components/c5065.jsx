import React from 'react';
const LABEL_5065 = 'component_5065';
export function Component5065({ value = 5065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5065, 'data-value': derived.doubled }, children);
}
export default Component5065;
