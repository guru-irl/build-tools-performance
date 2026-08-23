import React from 'react';
const LABEL_5247 = 'component_5247';
export function Component5247({ value = 5247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5247, 'data-value': derived.doubled }, children);
}
export default Component5247;
