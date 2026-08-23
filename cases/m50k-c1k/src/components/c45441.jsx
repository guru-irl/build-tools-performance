import React from 'react';
const LABEL_45441 = 'component_45441';
export function Component45441({ value = 45441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45441, 'data-value': derived.doubled }, children);
}
export default Component45441;
