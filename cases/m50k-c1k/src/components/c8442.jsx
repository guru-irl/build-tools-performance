import React from 'react';
const LABEL_8442 = 'component_8442';
export function Component8442({ value = 8442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8442, 'data-value': derived.doubled }, children);
}
export default Component8442;
