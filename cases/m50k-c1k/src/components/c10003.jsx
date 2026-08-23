import React from 'react';
const LABEL_10003 = 'component_10003';
export function Component10003({ value = 10003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10003, 'data-value': derived.doubled }, children);
}
export default Component10003;
