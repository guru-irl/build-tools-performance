import React from 'react';
const LABEL_46323 = 'component_46323';
export function Component46323({ value = 46323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46323, 'data-value': derived.doubled }, children);
}
export default Component46323;
