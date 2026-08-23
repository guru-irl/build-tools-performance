import React from 'react';
const LABEL_23459 = 'component_23459';
export function Component23459({ value = 23459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23459, 'data-value': derived.doubled }, children);
}
export default Component23459;
