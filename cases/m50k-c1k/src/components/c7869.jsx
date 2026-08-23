import React from 'react';
const LABEL_7869 = 'component_7869';
export function Component7869({ value = 7869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7869, 'data-value': derived.doubled }, children);
}
export default Component7869;
