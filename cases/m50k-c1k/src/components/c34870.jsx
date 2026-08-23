import React from 'react';
const LABEL_34870 = 'component_34870';
export function Component34870({ value = 34870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34870, 'data-value': derived.doubled }, children);
}
export default Component34870;
