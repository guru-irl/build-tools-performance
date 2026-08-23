import React from 'react';
const LABEL_45249 = 'component_45249';
export function Component45249({ value = 45249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45249, 'data-value': derived.doubled }, children);
}
export default Component45249;
