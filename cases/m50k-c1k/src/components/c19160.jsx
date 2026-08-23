import React from 'react';
const LABEL_19160 = 'component_19160';
export function Component19160({ value = 19160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19160, 'data-value': derived.doubled }, children);
}
export default Component19160;
