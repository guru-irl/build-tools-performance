import React from 'react';
const LABEL_32344 = 'component_32344';
export function Component32344({ value = 32344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32344, 'data-value': derived.doubled }, children);
}
export default Component32344;
