import React from 'react';
const LABEL_3879 = 'component_3879';
export function Component3879({ value = 3879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3879, 'data-value': derived.doubled }, children);
}
export default Component3879;
