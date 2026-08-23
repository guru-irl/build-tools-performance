import React from 'react';
const LABEL_4831 = 'component_4831';
export function Component4831({ value = 4831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4831, 'data-value': derived.doubled }, children);
}
export default Component4831;
