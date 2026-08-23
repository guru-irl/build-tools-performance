import React from 'react';
const LABEL_22228 = 'component_22228';
export function Component22228({ value = 22228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22228, 'data-value': derived.doubled }, children);
}
export default Component22228;
