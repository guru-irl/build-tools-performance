import React from 'react';
const LABEL_34831 = 'component_34831';
export function Component34831({ value = 34831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34831, 'data-value': derived.doubled }, children);
}
export default Component34831;
