import React from 'react';
const LABEL_18442 = 'component_18442';
export function Component18442({ value = 18442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18442, 'data-value': derived.doubled }, children);
}
export default Component18442;
