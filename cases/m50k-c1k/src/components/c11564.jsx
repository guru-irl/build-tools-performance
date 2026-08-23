import React from 'react';
const LABEL_11564 = 'component_11564';
export function Component11564({ value = 11564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11564, 'data-value': derived.doubled }, children);
}
export default Component11564;
