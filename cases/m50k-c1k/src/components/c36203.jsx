import React from 'react';
const LABEL_36203 = 'component_36203';
export function Component36203({ value = 36203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36203, 'data-value': derived.doubled }, children);
}
export default Component36203;
