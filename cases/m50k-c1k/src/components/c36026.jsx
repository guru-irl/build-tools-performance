import React from 'react';
const LABEL_36026 = 'component_36026';
export function Component36026({ value = 36026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36026, 'data-value': derived.doubled }, children);
}
export default Component36026;
