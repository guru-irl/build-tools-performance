import React from 'react';
const LABEL_11867 = 'component_11867';
export function Component11867({ value = 11867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11867, 'data-value': derived.doubled }, children);
}
export default Component11867;
