import React from 'react';
const LABEL_21844 = 'component_21844';
export function Component21844({ value = 21844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21844, 'data-value': derived.doubled }, children);
}
export default Component21844;
