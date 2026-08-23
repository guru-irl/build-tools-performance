import React from 'react';
const LABEL_15422 = 'component_15422';
export function Component15422({ value = 15422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15422, 'data-value': derived.doubled }, children);
}
export default Component15422;
