import React from 'react';
const LABEL_34442 = 'component_34442';
export function Component34442({ value = 34442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34442, 'data-value': derived.doubled }, children);
}
export default Component34442;
