import React from 'react';
const LABEL_11442 = 'component_11442';
export function Component11442({ value = 11442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11442, 'data-value': derived.doubled }, children);
}
export default Component11442;
