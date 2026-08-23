import React from 'react';
const LABEL_34955 = 'component_34955';
export function Component34955({ value = 34955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34955, 'data-value': derived.doubled }, children);
}
export default Component34955;
