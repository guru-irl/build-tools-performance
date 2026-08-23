import React from 'react';
const LABEL_36708 = 'component_36708';
export function Component36708({ value = 36708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36708, 'data-value': derived.doubled }, children);
}
export default Component36708;
