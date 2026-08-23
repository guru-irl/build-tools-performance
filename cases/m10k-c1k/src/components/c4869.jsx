import React from 'react';
const LABEL_4869 = 'component_4869';
export function Component4869({ value = 4869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4869, 'data-value': derived.doubled }, children);
}
export default Component4869;
