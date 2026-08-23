import React from 'react';
const LABEL_11663 = 'component_11663';
export function Component11663({ value = 11663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11663, 'data-value': derived.doubled }, children);
}
export default Component11663;
