import React from 'react';
const LABEL_38991 = 'component_38991';
export function Component38991({ value = 38991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38991, 'data-value': derived.doubled }, children);
}
export default Component38991;
