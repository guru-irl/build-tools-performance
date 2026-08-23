import React from 'react';
const LABEL_10223 = 'component_10223';
export function Component10223({ value = 10223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10223, 'data-value': derived.doubled }, children);
}
export default Component10223;
