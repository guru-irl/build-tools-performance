import React from 'react';
const LABEL_38026 = 'component_38026';
export function Component38026({ value = 38026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38026, 'data-value': derived.doubled }, children);
}
export default Component38026;
