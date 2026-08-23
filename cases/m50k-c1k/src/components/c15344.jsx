import React from 'react';
const LABEL_15344 = 'component_15344';
export function Component15344({ value = 15344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15344, 'data-value': derived.doubled }, children);
}
export default Component15344;
