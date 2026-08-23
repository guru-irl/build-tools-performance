import React from 'react';
const LABEL_36039 = 'component_36039';
export function Component36039({ value = 36039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36039, 'data-value': derived.doubled }, children);
}
export default Component36039;
