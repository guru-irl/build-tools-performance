import React from 'react';
const LABEL_36049 = 'component_36049';
export function Component36049({ value = 36049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36049, 'data-value': derived.doubled }, children);
}
export default Component36049;
