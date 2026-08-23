import React from 'react';
const LABEL_16442 = 'component_16442';
export function Component16442({ value = 16442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16442, 'data-value': derived.doubled }, children);
}
export default Component16442;
