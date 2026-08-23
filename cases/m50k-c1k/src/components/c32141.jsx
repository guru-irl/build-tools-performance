import React from 'react';
const LABEL_32141 = 'component_32141';
export function Component32141({ value = 32141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32141, 'data-value': derived.doubled }, children);
}
export default Component32141;
