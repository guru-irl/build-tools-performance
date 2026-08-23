import React from 'react';
const LABEL_14277 = 'component_14277';
export function Component14277({ value = 14277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14277, 'data-value': derived.doubled }, children);
}
export default Component14277;
