import React from 'react';
const LABEL_15373 = 'component_15373';
export function Component15373({ value = 15373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15373, 'data-value': derived.doubled }, children);
}
export default Component15373;
