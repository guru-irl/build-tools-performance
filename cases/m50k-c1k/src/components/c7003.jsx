import React from 'react';
const LABEL_7003 = 'component_7003';
export function Component7003({ value = 7003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7003, 'data-value': derived.doubled }, children);
}
export default Component7003;
