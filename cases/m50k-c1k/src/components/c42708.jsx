import React from 'react';
const LABEL_42708 = 'component_42708';
export function Component42708({ value = 42708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42708, 'data-value': derived.doubled }, children);
}
export default Component42708;
