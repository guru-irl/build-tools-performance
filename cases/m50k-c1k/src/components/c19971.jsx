import React from 'react';
const LABEL_19971 = 'component_19971';
export function Component19971({ value = 19971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19971, 'data-value': derived.doubled }, children);
}
export default Component19971;
