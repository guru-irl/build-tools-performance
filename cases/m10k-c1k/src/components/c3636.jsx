import React from 'react';
const LABEL_3636 = 'component_3636';
export function Component3636({ value = 3636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3636, 'data-value': derived.doubled }, children);
}
export default Component3636;
