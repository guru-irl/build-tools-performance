import React from 'react';
const LABEL_44442 = 'component_44442';
export function Component44442({ value = 44442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44442, 'data-value': derived.doubled }, children);
}
export default Component44442;
