import React from 'react';
const LABEL_6324 = 'component_6324';
export function Component6324({ value = 6324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6324, 'data-value': derived.doubled }, children);
}
export default Component6324;
