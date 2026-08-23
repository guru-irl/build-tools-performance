import React from 'react';
const LABEL_11104 = 'component_11104';
export function Component11104({ value = 11104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11104, 'data-value': derived.doubled }, children);
}
export default Component11104;
