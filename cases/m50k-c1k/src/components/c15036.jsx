import React from 'react';
const LABEL_15036 = 'component_15036';
export function Component15036({ value = 15036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15036, 'data-value': derived.doubled }, children);
}
export default Component15036;
