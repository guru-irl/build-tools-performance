import React from 'react';
const LABEL_15883 = 'component_15883';
export function Component15883({ value = 15883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15883, 'data-value': derived.doubled }, children);
}
export default Component15883;
