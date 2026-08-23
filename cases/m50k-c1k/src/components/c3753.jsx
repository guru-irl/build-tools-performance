import React from 'react';
const LABEL_3753 = 'component_3753';
export function Component3753({ value = 3753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3753, 'data-value': derived.doubled }, children);
}
export default Component3753;
