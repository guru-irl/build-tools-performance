import React from 'react';
const LABEL_14824 = 'component_14824';
export function Component14824({ value = 14824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14824, 'data-value': derived.doubled }, children);
}
export default Component14824;
