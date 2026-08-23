import React from 'react';
const LABEL_36696 = 'component_36696';
export function Component36696({ value = 36696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36696, 'data-value': derived.doubled }, children);
}
export default Component36696;
