import React from 'react';
const LABEL_20026 = 'component_20026';
export function Component20026({ value = 20026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20026, 'data-value': derived.doubled }, children);
}
export default Component20026;
