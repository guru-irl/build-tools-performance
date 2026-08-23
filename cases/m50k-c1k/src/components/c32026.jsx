import React from 'react';
const LABEL_32026 = 'component_32026';
export function Component32026({ value = 32026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32026, 'data-value': derived.doubled }, children);
}
export default Component32026;
