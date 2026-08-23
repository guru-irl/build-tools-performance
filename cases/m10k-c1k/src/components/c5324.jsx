import React from 'react';
const LABEL_5324 = 'component_5324';
export function Component5324({ value = 5324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5324, 'data-value': derived.doubled }, children);
}
export default Component5324;
