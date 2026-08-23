import React from 'react';
const LABEL_23034 = 'component_23034';
export function Component23034({ value = 23034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23034, 'data-value': derived.doubled }, children);
}
export default Component23034;
