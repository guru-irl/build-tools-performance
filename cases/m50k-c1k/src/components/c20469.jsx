import React from 'react';
const LABEL_20469 = 'component_20469';
export function Component20469({ value = 20469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20469, 'data-value': derived.doubled }, children);
}
export default Component20469;
