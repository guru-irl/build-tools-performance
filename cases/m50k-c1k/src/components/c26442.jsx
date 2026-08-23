import React from 'react';
const LABEL_26442 = 'component_26442';
export function Component26442({ value = 26442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26442, 'data-value': derived.doubled }, children);
}
export default Component26442;
