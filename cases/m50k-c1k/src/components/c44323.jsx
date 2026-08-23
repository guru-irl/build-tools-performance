import React from 'react';
const LABEL_44323 = 'component_44323';
export function Component44323({ value = 44323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44323, 'data-value': derived.doubled }, children);
}
export default Component44323;
