import React from 'react';
const LABEL_14026 = 'component_14026';
export function Component14026({ value = 14026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14026, 'data-value': derived.doubled }, children);
}
export default Component14026;
