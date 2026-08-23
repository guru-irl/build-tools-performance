import React from 'react';
const LABEL_37203 = 'component_37203';
export function Component37203({ value = 37203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37203, 'data-value': derived.doubled }, children);
}
export default Component37203;
