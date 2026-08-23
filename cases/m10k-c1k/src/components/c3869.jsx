import React from 'react';
const LABEL_3869 = 'component_3869';
export function Component3869({ value = 3869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3869, 'data-value': derived.doubled }, children);
}
export default Component3869;
