import React from 'react';
const LABEL_5090 = 'component_5090';
export function Component5090({ value = 5090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5090, 'data-value': derived.doubled }, children);
}
export default Component5090;
