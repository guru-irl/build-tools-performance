import React from 'react';
const LABEL_45138 = 'component_45138';
export function Component45138({ value = 45138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45138, 'data-value': derived.doubled }, children);
}
export default Component45138;
