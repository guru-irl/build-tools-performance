import React from 'react';
const LABEL_22877 = 'component_22877';
export function Component22877({ value = 22877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22877, 'data-value': derived.doubled }, children);
}
export default Component22877;
