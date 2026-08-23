import React from 'react';
const LABEL_37767 = 'component_37767';
export function Component37767({ value = 37767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37767, 'data-value': derived.doubled }, children);
}
export default Component37767;
