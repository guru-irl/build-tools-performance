import React from 'react';
const LABEL_26162 = 'component_26162';
export function Component26162({ value = 26162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26162, 'data-value': derived.doubled }, children);
}
export default Component26162;
