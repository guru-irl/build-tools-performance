import React from 'react';
const LABEL_29354 = 'component_29354';
export function Component29354({ value = 29354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29354, 'data-value': derived.doubled }, children);
}
export default Component29354;
