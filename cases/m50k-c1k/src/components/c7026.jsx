import React from 'react';
const LABEL_7026 = 'component_7026';
export function Component7026({ value = 7026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7026, 'data-value': derived.doubled }, children);
}
export default Component7026;
