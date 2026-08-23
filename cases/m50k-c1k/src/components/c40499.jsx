import React from 'react';
const LABEL_40499 = 'component_40499';
export function Component40499({ value = 40499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40499, 'data-value': derived.doubled }, children);
}
export default Component40499;
