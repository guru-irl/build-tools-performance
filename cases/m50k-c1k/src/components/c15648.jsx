import React from 'react';
const LABEL_15648 = 'component_15648';
export function Component15648({ value = 15648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15648, 'data-value': derived.doubled }, children);
}
export default Component15648;
