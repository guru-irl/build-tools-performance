import React from 'react';
const LABEL_15946 = 'component_15946';
export function Component15946({ value = 15946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15946, 'data-value': derived.doubled }, children);
}
export default Component15946;
