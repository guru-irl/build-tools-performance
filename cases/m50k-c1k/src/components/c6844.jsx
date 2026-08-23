import React from 'react';
const LABEL_6844 = 'component_6844';
export function Component6844({ value = 6844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6844, 'data-value': derived.doubled }, children);
}
export default Component6844;
