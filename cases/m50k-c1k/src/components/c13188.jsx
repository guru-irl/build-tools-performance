import React from 'react';
const LABEL_13188 = 'component_13188';
export function Component13188({ value = 13188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13188, 'data-value': derived.doubled }, children);
}
export default Component13188;
