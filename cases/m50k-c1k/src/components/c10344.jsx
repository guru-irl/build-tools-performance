import React from 'react';
const LABEL_10344 = 'component_10344';
export function Component10344({ value = 10344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10344, 'data-value': derived.doubled }, children);
}
export default Component10344;
