import React from 'react';
const LABEL_45517 = 'component_45517';
export function Component45517({ value = 45517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45517, 'data-value': derived.doubled }, children);
}
export default Component45517;
