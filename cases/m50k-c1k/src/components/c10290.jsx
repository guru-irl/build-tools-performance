import React from 'react';
const LABEL_10290 = 'component_10290';
export function Component10290({ value = 10290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10290, 'data-value': derived.doubled }, children);
}
export default Component10290;
