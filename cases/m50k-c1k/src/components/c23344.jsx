import React from 'react';
const LABEL_23344 = 'component_23344';
export function Component23344({ value = 23344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23344, 'data-value': derived.doubled }, children);
}
export default Component23344;
