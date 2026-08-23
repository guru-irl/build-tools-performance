import React from 'react';
const LABEL_46003 = 'component_46003';
export function Component46003({ value = 46003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46003, 'data-value': derived.doubled }, children);
}
export default Component46003;
