import React from 'react';
const LABEL_20667 = 'component_20667';
export function Component20667({ value = 20667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20667, 'data-value': derived.doubled }, children);
}
export default Component20667;
