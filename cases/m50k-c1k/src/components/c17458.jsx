import React from 'react';
const LABEL_17458 = 'component_17458';
export function Component17458({ value = 17458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17458, 'data-value': derived.doubled }, children);
}
export default Component17458;
