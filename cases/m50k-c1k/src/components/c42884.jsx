import React from 'react';
const LABEL_42884 = 'component_42884';
export function Component42884({ value = 42884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42884, 'data-value': derived.doubled }, children);
}
export default Component42884;
