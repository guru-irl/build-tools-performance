import React from 'react';
const LABEL_20831 = 'component_20831';
export function Component20831({ value = 20831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20831, 'data-value': derived.doubled }, children);
}
export default Component20831;
