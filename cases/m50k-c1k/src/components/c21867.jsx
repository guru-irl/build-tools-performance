import React from 'react';
const LABEL_21867 = 'component_21867';
export function Component21867({ value = 21867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21867, 'data-value': derived.doubled }, children);
}
export default Component21867;
