import React from 'react';
const LABEL_19273 = 'component_19273';
export function Component19273({ value = 19273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19273, 'data-value': derived.doubled }, children);
}
export default Component19273;
