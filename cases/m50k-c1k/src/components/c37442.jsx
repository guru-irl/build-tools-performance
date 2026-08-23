import React from 'react';
const LABEL_37442 = 'component_37442';
export function Component37442({ value = 37442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37442, 'data-value': derived.doubled }, children);
}
export default Component37442;
