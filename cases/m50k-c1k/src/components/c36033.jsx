import React from 'react';
const LABEL_36033 = 'component_36033';
export function Component36033({ value = 36033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36033, 'data-value': derived.doubled }, children);
}
export default Component36033;
