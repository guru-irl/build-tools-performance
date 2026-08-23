import React from 'react';
const LABEL_22106 = 'component_22106';
export function Component22106({ value = 22106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22106, 'data-value': derived.doubled }, children);
}
export default Component22106;
