import React from 'react';
const LABEL_32867 = 'component_32867';
export function Component32867({ value = 32867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32867, 'data-value': derived.doubled }, children);
}
export default Component32867;
