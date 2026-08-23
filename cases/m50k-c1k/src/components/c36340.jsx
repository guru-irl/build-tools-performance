import React from 'react';
const LABEL_36340 = 'component_36340';
export function Component36340({ value = 36340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36340, 'data-value': derived.doubled }, children);
}
export default Component36340;
