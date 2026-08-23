import React from 'react';
const LABEL_28869 = 'component_28869';
export function Component28869({ value = 28869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28869, 'data-value': derived.doubled }, children);
}
export default Component28869;
