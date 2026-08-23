import React from 'react';
const LABEL_4330 = 'component_4330';
export function Component4330({ value = 4330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4330, 'data-value': derived.doubled }, children);
}
export default Component4330;
