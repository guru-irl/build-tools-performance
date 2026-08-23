import React from 'react';
const LABEL_17866 = 'component_17866';
export function Component17866({ value = 17866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17866, 'data-value': derived.doubled }, children);
}
export default Component17866;
