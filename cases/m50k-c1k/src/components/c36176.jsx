import React from 'react';
const LABEL_36176 = 'component_36176';
export function Component36176({ value = 36176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36176, 'data-value': derived.doubled }, children);
}
export default Component36176;
