import React from 'react';
const LABEL_37162 = 'component_37162';
export function Component37162({ value = 37162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37162, 'data-value': derived.doubled }, children);
}
export default Component37162;
