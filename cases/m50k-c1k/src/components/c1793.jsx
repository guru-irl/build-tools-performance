import React from 'react';
const LABEL_1793 = 'component_1793';
export function Component1793({ value = 1793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1793, 'data-value': derived.doubled }, children);
}
export default Component1793;
