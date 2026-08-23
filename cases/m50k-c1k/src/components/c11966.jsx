import React from 'react';
const LABEL_11966 = 'component_11966';
export function Component11966({ value = 11966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11966, 'data-value': derived.doubled }, children);
}
export default Component11966;
