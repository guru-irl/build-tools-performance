import React from 'react';
const LABEL_38236 = 'component_38236';
export function Component38236({ value = 38236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38236, 'data-value': derived.doubled }, children);
}
export default Component38236;
