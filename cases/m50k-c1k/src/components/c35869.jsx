import React from 'react';
const LABEL_35869 = 'component_35869';
export function Component35869({ value = 35869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35869, 'data-value': derived.doubled }, children);
}
export default Component35869;
