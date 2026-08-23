import React from 'react';
const LABEL_11052 = 'component_11052';
export function Component11052({ value = 11052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11052, 'data-value': derived.doubled }, children);
}
export default Component11052;
