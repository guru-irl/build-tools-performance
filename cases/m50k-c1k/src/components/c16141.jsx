import React from 'react';
const LABEL_16141 = 'component_16141';
export function Component16141({ value = 16141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16141, 'data-value': derived.doubled }, children);
}
export default Component16141;
