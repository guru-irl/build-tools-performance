import React from 'react';
const LABEL_6831 = 'component_6831';
export function Component6831({ value = 6831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6831, 'data-value': derived.doubled }, children);
}
export default Component6831;
