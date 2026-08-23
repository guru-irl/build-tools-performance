import React from 'react';
const LABEL_2601 = 'component_2601';
export function Component2601({ value = 2601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2601, 'data-value': derived.doubled }, children);
}
export default Component2601;
