import React from 'react';
const LABEL_14003 = 'component_14003';
export function Component14003({ value = 14003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14003, 'data-value': derived.doubled }, children);
}
export default Component14003;
