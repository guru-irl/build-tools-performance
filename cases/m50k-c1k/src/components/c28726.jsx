import React from 'react';
const LABEL_28726 = 'component_28726';
export function Component28726({ value = 28726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28726, 'data-value': derived.doubled }, children);
}
export default Component28726;
