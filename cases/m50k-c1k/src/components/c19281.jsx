import React from 'react';
const LABEL_19281 = 'component_19281';
export function Component19281({ value = 19281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19281, 'data-value': derived.doubled }, children);
}
export default Component19281;
