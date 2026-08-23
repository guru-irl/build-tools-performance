import React from 'react';
const LABEL_36150 = 'component_36150';
export function Component36150({ value = 36150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36150, 'data-value': derived.doubled }, children);
}
export default Component36150;
