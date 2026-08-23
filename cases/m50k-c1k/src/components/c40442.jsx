import React from 'react';
const LABEL_40442 = 'component_40442';
export function Component40442({ value = 40442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40442, 'data-value': derived.doubled }, children);
}
export default Component40442;
