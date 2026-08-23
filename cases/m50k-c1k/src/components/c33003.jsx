import React from 'react';
const LABEL_33003 = 'component_33003';
export function Component33003({ value = 33003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33003, 'data-value': derived.doubled }, children);
}
export default Component33003;
