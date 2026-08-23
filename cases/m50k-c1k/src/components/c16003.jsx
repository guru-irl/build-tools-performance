import React from 'react';
const LABEL_16003 = 'component_16003';
export function Component16003({ value = 16003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16003, 'data-value': derived.doubled }, children);
}
export default Component16003;
