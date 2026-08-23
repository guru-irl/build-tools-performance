import React from 'react';
const LABEL_16691 = 'component_16691';
export function Component16691({ value = 16691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16691, 'data-value': derived.doubled }, children);
}
export default Component16691;
