import React from 'react';
const LABEL_6333 = 'component_6333';
export function Component6333({ value = 6333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6333, 'data-value': derived.doubled }, children);
}
export default Component6333;
