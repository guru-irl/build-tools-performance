import React from 'react';
const LABEL_6344 = 'component_6344';
export function Component6344({ value = 6344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6344, 'data-value': derived.doubled }, children);
}
export default Component6344;
