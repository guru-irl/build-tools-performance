import React from 'react';
const LABEL_15870 = 'component_15870';
export function Component15870({ value = 15870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15870, 'data-value': derived.doubled }, children);
}
export default Component15870;
