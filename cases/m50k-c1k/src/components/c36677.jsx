import React from 'react';
const LABEL_36677 = 'component_36677';
export function Component36677({ value = 36677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36677, 'data-value': derived.doubled }, children);
}
export default Component36677;
