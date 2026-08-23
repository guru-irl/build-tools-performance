import React from 'react';
const LABEL_45757 = 'component_45757';
export function Component45757({ value = 45757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45757, 'data-value': derived.doubled }, children);
}
export default Component45757;
