import React from 'react';
const LABEL_11212 = 'component_11212';
export function Component11212({ value = 11212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11212, 'data-value': derived.doubled }, children);
}
export default Component11212;
