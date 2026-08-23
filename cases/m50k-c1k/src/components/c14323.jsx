import React from 'react';
const LABEL_14323 = 'component_14323';
export function Component14323({ value = 14323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14323, 'data-value': derived.doubled }, children);
}
export default Component14323;
