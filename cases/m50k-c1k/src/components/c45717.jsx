import React from 'react';
const LABEL_45717 = 'component_45717';
export function Component45717({ value = 45717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45717, 'data-value': derived.doubled }, children);
}
export default Component45717;
