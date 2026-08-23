import React from 'react';
const LABEL_21964 = 'component_21964';
export function Component21964({ value = 21964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21964, 'data-value': derived.doubled }, children);
}
export default Component21964;
