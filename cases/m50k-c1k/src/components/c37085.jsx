import React from 'react';
const LABEL_37085 = 'component_37085';
export function Component37085({ value = 37085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37085, 'data-value': derived.doubled }, children);
}
export default Component37085;
