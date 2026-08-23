import React from 'react';
const LABEL_11831 = 'component_11831';
export function Component11831({ value = 11831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11831, 'data-value': derived.doubled }, children);
}
export default Component11831;
