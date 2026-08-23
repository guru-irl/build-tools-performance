import React from 'react';
const LABEL_11139 = 'component_11139';
export function Component11139({ value = 11139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11139, 'data-value': derived.doubled }, children);
}
export default Component11139;
