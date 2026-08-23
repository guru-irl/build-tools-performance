import React from 'react';
const LABEL_21940 = 'component_21940';
export function Component21940({ value = 21940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21940, 'data-value': derived.doubled }, children);
}
export default Component21940;
