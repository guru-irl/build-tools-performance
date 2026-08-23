import React from 'react';
const LABEL_31964 = 'component_31964';
export function Component31964({ value = 31964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31964, 'data-value': derived.doubled }, children);
}
export default Component31964;
