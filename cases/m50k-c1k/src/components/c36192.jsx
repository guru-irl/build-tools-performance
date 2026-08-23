import React from 'react';
const LABEL_36192 = 'component_36192';
export function Component36192({ value = 36192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36192, 'data-value': derived.doubled }, children);
}
export default Component36192;
