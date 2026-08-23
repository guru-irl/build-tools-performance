import React from 'react';
const LABEL_11425 = 'component_11425';
export function Component11425({ value = 11425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11425, 'data-value': derived.doubled }, children);
}
export default Component11425;
