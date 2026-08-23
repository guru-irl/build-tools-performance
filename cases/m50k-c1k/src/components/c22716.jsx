import React from 'react';
const LABEL_22716 = 'component_22716';
export function Component22716({ value = 22716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22716, 'data-value': derived.doubled }, children);
}
export default Component22716;
