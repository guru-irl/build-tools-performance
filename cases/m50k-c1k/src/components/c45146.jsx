import React from 'react';
const LABEL_45146 = 'component_45146';
export function Component45146({ value = 45146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45146, 'data-value': derived.doubled }, children);
}
export default Component45146;
