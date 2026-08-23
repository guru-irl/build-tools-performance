import React from 'react';
const LABEL_19812 = 'component_19812';
export function Component19812({ value = 19812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19812, 'data-value': derived.doubled }, children);
}
export default Component19812;
