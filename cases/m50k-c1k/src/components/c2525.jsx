import React from 'react';
const LABEL_2525 = 'component_2525';
export function Component2525({ value = 2525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2525, 'data-value': derived.doubled }, children);
}
export default Component2525;
