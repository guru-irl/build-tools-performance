import React from 'react';
const LABEL_28026 = 'component_28026';
export function Component28026({ value = 28026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28026, 'data-value': derived.doubled }, children);
}
export default Component28026;
