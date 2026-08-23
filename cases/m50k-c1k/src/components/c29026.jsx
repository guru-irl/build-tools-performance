import React from 'react';
const LABEL_29026 = 'component_29026';
export function Component29026({ value = 29026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29026, 'data-value': derived.doubled }, children);
}
export default Component29026;
