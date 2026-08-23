import React from 'react';
const LABEL_8590 = 'component_8590';
export function Component8590({ value = 8590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8590, 'data-value': derived.doubled }, children);
}
export default Component8590;
