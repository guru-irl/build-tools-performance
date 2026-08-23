import React from 'react';
const LABEL_32969 = 'component_32969';
export function Component32969({ value = 32969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32969, 'data-value': derived.doubled }, children);
}
export default Component32969;
