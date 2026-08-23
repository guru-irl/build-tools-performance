import React from 'react';
const LABEL_632 = 'component_632';
export function Component632({ value = 632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_632, 'data-value': derived.doubled }, children);
}
export default Component632;
