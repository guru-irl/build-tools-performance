import React from 'react';
const LABEL_36528 = 'component_36528';
export function Component36528({ value = 36528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36528, 'data-value': derived.doubled }, children);
}
export default Component36528;
