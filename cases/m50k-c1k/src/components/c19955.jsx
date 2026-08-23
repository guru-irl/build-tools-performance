import React from 'react';
const LABEL_19955 = 'component_19955';
export function Component19955({ value = 19955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19955, 'data-value': derived.doubled }, children);
}
export default Component19955;
