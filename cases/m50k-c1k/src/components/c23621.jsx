import React from 'react';
const LABEL_23621 = 'component_23621';
export function Component23621({ value = 23621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23621, 'data-value': derived.doubled }, children);
}
export default Component23621;
