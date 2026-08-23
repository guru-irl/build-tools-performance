import React from 'react';
const LABEL_38955 = 'component_38955';
export function Component38955({ value = 38955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38955, 'data-value': derived.doubled }, children);
}
export default Component38955;
