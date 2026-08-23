import React from 'react';
const LABEL_22460 = 'component_22460';
export function Component22460({ value = 22460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22460, 'data-value': derived.doubled }, children);
}
export default Component22460;
