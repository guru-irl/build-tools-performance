import React from 'react';
const LABEL_26964 = 'component_26964';
export function Component26964({ value = 26964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26964, 'data-value': derived.doubled }, children);
}
export default Component26964;
