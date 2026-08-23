import React from 'react';
const LABEL_24869 = 'component_24869';
export function Component24869({ value = 24869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24869, 'data-value': derived.doubled }, children);
}
export default Component24869;
