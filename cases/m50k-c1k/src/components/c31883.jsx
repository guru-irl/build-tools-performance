import React from 'react';
const LABEL_31883 = 'component_31883';
export function Component31883({ value = 31883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31883, 'data-value': derived.doubled }, children);
}
export default Component31883;
