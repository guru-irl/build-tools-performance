import React from 'react';
const LABEL_36850 = 'component_36850';
export function Component36850({ value = 36850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36850, 'data-value': derived.doubled }, children);
}
export default Component36850;
