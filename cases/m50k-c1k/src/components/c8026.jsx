import React from 'react';
const LABEL_8026 = 'component_8026';
export function Component8026({ value = 8026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8026, 'data-value': derived.doubled }, children);
}
export default Component8026;
