import React from 'react';
const LABEL_14281 = 'component_14281';
export function Component14281({ value = 14281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14281, 'data-value': derived.doubled }, children);
}
export default Component14281;
