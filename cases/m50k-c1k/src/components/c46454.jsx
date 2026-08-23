import React from 'react';
const LABEL_46454 = 'component_46454';
export function Component46454({ value = 46454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46454, 'data-value': derived.doubled }, children);
}
export default Component46454;
