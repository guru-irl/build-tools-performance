import React from 'react';
const LABEL_22195 = 'component_22195';
export function Component22195({ value = 22195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22195, 'data-value': derived.doubled }, children);
}
export default Component22195;
