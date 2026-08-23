import React from 'react';
const LABEL_36235 = 'component_36235';
export function Component36235({ value = 36235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36235, 'data-value': derived.doubled }, children);
}
export default Component36235;
