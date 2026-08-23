import React from 'react';
const LABEL_5003 = 'component_5003';
export function Component5003({ value = 5003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5003, 'data-value': derived.doubled }, children);
}
export default Component5003;
