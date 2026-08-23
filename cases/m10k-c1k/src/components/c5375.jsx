import React from 'react';
const LABEL_5375 = 'component_5375';
export function Component5375({ value = 5375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5375, 'data-value': derived.doubled }, children);
}
export default Component5375;
