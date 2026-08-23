import React from 'react';
const LABEL_442 = 'component_442';
export function Component442({ value = 442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_442, 'data-value': derived.doubled }, children);
}
export default Component442;
