import React from 'react';
const LABEL_3788 = 'component_3788';
export function Component3788({ value = 3788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3788, 'data-value': derived.doubled }, children);
}
export default Component3788;
