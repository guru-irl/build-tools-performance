import React from 'react';
const LABEL_45955 = 'component_45955';
export function Component45955({ value = 45955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45955, 'data-value': derived.doubled }, children);
}
export default Component45955;
