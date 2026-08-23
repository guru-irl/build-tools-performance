import React from 'react';
const LABEL_7590 = 'component_7590';
export function Component7590({ value = 7590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7590, 'data-value': derived.doubled }, children);
}
export default Component7590;
