import React from 'react';
const LABEL_15026 = 'component_15026';
export function Component15026({ value = 15026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15026, 'data-value': derived.doubled }, children);
}
export default Component15026;
