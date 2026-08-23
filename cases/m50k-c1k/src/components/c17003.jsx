import React from 'react';
const LABEL_17003 = 'component_17003';
export function Component17003({ value = 17003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17003, 'data-value': derived.doubled }, children);
}
export default Component17003;
