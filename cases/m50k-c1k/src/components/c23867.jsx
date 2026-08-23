import React from 'react';
const LABEL_23867 = 'component_23867';
export function Component23867({ value = 23867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23867, 'data-value': derived.doubled }, children);
}
export default Component23867;
