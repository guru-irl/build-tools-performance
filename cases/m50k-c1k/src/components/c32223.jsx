import React from 'react';
const LABEL_32223 = 'component_32223';
export function Component32223({ value = 32223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32223, 'data-value': derived.doubled }, children);
}
export default Component32223;
