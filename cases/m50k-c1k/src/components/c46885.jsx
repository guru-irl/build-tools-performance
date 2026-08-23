import React from 'react';
const LABEL_46885 = 'component_46885';
export function Component46885({ value = 46885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46885, 'data-value': derived.doubled }, children);
}
export default Component46885;
