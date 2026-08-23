import React from 'react';
const LABEL_3323 = 'component_3323';
export function Component3323({ value = 3323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3323, 'data-value': derived.doubled }, children);
}
export default Component3323;
