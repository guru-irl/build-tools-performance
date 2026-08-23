import React from 'react';
const LABEL_5869 = 'component_5869';
export function Component5869({ value = 5869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5869, 'data-value': derived.doubled }, children);
}
export default Component5869;
