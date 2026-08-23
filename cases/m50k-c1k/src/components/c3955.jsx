import React from 'react';
const LABEL_3955 = 'component_3955';
export function Component3955({ value = 3955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3955, 'data-value': derived.doubled }, children);
}
export default Component3955;
