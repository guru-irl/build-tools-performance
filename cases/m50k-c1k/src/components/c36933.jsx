import React from 'react';
const LABEL_36933 = 'component_36933';
export function Component36933({ value = 36933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36933, 'data-value': derived.doubled }, children);
}
export default Component36933;
