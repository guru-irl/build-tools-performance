import React from 'react';
const LABEL_29003 = 'component_29003';
export function Component29003({ value = 29003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29003, 'data-value': derived.doubled }, children);
}
export default Component29003;
