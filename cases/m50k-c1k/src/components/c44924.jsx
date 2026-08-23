import React from 'react';
const LABEL_44924 = 'component_44924';
export function Component44924({ value = 44924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44924, 'data-value': derived.doubled }, children);
}
export default Component44924;
