import React from 'react';
const LABEL_45969 = 'component_45969';
export function Component45969({ value = 45969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45969, 'data-value': derived.doubled }, children);
}
export default Component45969;
