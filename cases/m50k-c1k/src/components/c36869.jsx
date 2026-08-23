import React from 'react';
const LABEL_36869 = 'component_36869';
export function Component36869({ value = 36869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36869, 'data-value': derived.doubled }, children);
}
export default Component36869;
