import React from 'react';
const LABEL_36616 = 'component_36616';
export function Component36616({ value = 36616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36616, 'data-value': derived.doubled }, children);
}
export default Component36616;
