import React from 'react';
const LABEL_19708 = 'component_19708';
export function Component19708({ value = 19708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19708, 'data-value': derived.doubled }, children);
}
export default Component19708;
