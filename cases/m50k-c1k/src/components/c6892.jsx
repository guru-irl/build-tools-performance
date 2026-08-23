import React from 'react';
const LABEL_6892 = 'component_6892';
export function Component6892({ value = 6892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6892, 'data-value': derived.doubled }, children);
}
export default Component6892;
