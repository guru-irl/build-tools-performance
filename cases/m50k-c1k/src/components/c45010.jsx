import React from 'react';
const LABEL_45010 = 'component_45010';
export function Component45010({ value = 45010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45010, 'data-value': derived.doubled }, children);
}
export default Component45010;
