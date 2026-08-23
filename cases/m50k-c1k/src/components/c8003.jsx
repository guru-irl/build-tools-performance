import React from 'react';
const LABEL_8003 = 'component_8003';
export function Component8003({ value = 8003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8003, 'data-value': derived.doubled }, children);
}
export default Component8003;
