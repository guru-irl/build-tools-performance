import React from 'react';
const LABEL_15214 = 'component_15214';
export function Component15214({ value = 15214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15214, 'data-value': derived.doubled }, children);
}
export default Component15214;
