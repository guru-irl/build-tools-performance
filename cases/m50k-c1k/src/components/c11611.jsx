import React from 'react';
const LABEL_11611 = 'component_11611';
export function Component11611({ value = 11611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11611, 'data-value': derived.doubled }, children);
}
export default Component11611;
