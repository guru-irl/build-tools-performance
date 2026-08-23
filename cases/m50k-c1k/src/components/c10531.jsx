import React from 'react';
const LABEL_10531 = 'component_10531';
export function Component10531({ value = 10531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10531, 'data-value': derived.doubled }, children);
}
export default Component10531;
