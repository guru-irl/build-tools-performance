import React from 'react';
const LABEL_15442 = 'component_15442';
export function Component15442({ value = 15442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15442, 'data-value': derived.doubled }, children);
}
export default Component15442;
