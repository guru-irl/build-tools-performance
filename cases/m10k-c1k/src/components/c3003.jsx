import React from 'react';
const LABEL_3003 = 'component_3003';
export function Component3003({ value = 3003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3003, 'data-value': derived.doubled }, children);
}
export default Component3003;
