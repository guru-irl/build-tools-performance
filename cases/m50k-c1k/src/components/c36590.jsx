import React from 'react';
const LABEL_36590 = 'component_36590';
export function Component36590({ value = 36590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36590, 'data-value': derived.doubled }, children);
}
export default Component36590;
