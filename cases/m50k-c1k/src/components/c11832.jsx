import React from 'react';
const LABEL_11832 = 'component_11832';
export function Component11832({ value = 11832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11832, 'data-value': derived.doubled }, children);
}
export default Component11832;
