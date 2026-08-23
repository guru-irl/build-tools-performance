import React from 'react';
const LABEL_16028 = 'component_16028';
export function Component16028({ value = 16028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16028, 'data-value': derived.doubled }, children);
}
export default Component16028;
