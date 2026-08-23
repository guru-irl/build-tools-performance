import React from 'react';
const LABEL_38632 = 'component_38632';
export function Component38632({ value = 38632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38632, 'data-value': derived.doubled }, children);
}
export default Component38632;
