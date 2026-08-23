import React from 'react';
const LABEL_15897 = 'component_15897';
export function Component15897({ value = 15897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15897, 'data-value': derived.doubled }, children);
}
export default Component15897;
